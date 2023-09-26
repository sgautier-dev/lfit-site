import { NextResponse, NextRequest } from "next/server";
import { authMiddleware } from "@clerk/nextjs";
import rateLimit from "express-rate-limit";

const allowedOrigins = new Set(
	process.env.NODE_ENV === "production"
		? ["https://www.lfit.pro", "https://lfit.pro"]
		: ["http://localhost:3000"]
);

const getKey = (req: any) => {
	return req.headers.get("x-forwarded-for") || "unknown-ip";
};

const baseRateLimiter = rateLimit({
	keyGenerator: getKey,
	windowMs: 60 * 1000,
	max: 10,
});

const webhookRateLimiter = rateLimit({
	keyGenerator: getKey,
	windowMs: 60 * 1000,
	max: 100,
});

//middleware performing rate limiting and allowed origins check
async function customMiddleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	const contactStripeRegex = /^\/api\/(contact|stripe)/;
	const webhookRevalidateRegex = /^\/api\/(webhook|revalidate)/;

	// Skip allowedOrigins check for routes triggered by tier webhooks
	if (!webhookRevalidateRegex.test(path)) {
		const origin = request.headers.get("origin");
		if (origin && !allowedOrigins.has(origin)) {
			return new NextResponse(null, {
				status: 403,
				statusText: "Forbidden",
				headers: {
					"Content-Type": "text/plain",
					"Access-Control-Allow-Origin": Array.from(allowedOrigins).join(", "),
				},
			});
		}
	}

	// Apply rate limiting based on the path
	let rateLimited: boolean = false;
	if (contactStripeRegex.test(path)) {
		baseRateLimiter(request as any, {} as any, () => {
			rateLimited = true;
		});
	} else if (webhookRevalidateRegex.test(path)) {
		webhookRateLimiter(request as any, {} as any, () => {
			rateLimited = true;
		});
	}

	if (rateLimited) {
		return new NextResponse(null, {
			status: 429,
			statusText: "Too Many Requests",
			headers: {
				"Retry-After": "60",
				"Content-Type": "text/plain",
			},
		});
	}

	// Continue with Clerk's authentication middleware
	return NextResponse.next();
}

// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
	beforeAuth: (req, event) => {
		return customMiddleware(req);
	},
	publicRoutes: [
		"/",
		"/api/webhook",
		"/api/revalidate",
		"/mentions",
		"/privacy",
		"/api/contact",
		"/studio",
	],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

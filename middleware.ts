import { NextResponse, NextRequest } from "next/server"
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"
import rateLimit from "express-rate-limit"

const allowedOrigins = new Set(
	process.env.NODE_ENV === "production"
		? ["https://www.lfit.pro", "https://lfit.pro"]
		: ["http://localhost:3000"]
)

const getKey = (req: any) => {
	return req.headers.get("x-forwarded-for") || "unknown-ip"
}

const baseRateLimiter = rateLimit({
	keyGenerator: getKey,
	windowMs: 60 * 1000,
	max: 10,
})

const webhookRateLimiter = rateLimit({
	keyGenerator: getKey,
	windowMs: 60 * 1000,
	max: 100,
})

const isGooglebot = (req: any) => {
	const agent = req.headers.get("user-agent")?.toLowerCase() || ""
	// console.log("User agent:", agent)
	return agent.includes("googlebot") || agent.includes("google-inspectiontool")
}

//middleware performing rate limiting and allowed origins check
async function customMiddleware(request: NextRequest) {
	const path = request.nextUrl.pathname

	const contactStripeRegex = /^\/api\/(contact|stripe)/
	const webhookRevalidateRegex = /^\/api\/(webhook|revalidate)/

	// console.log("Middleware accessed", new Date().toISOString())

	// Skip rate limiting and allowedOrigins check for Googlebot
	if (isGooglebot(request)) {
		// console.log("Googlebot detected")
		return NextResponse.next()
	}

	// Skip allowedOrigins check for routes triggered by tier webhooks
	if (!webhookRevalidateRegex.test(path)) {
		const origin = request.headers.get("origin")
		if (origin && !allowedOrigins.has(origin)) {
			return new NextResponse(null, {
				status: 403,
				statusText: "Forbidden",
				headers: {
					"Content-Type": "text/plain",
					"Access-Control-Allow-Origin": Array.from(allowedOrigins).join(", "),
				},
			})
		}
	}

	// Apply rate limiting based on the path
	let rateLimited: boolean = false
	if (contactStripeRegex.test(path)) {
		baseRateLimiter(request as any, {} as any, () => {
			rateLimited = true
		})
	} else if (webhookRevalidateRegex.test(path)) {
		webhookRateLimiter(request as any, {} as any, () => {
			rateLimited = true
		})
	}

	if (rateLimited) {
		return new NextResponse(null, {
			status: 429,
			statusText: "Too Many Requests",
			headers: {
				"Retry-After": "60",
				"Content-Type": "text/plain",
			},
		})
	}

	// Continue with Clerk's authentication middleware
	// console.log("Passing to Clerk's middleware")
	return NextResponse.next()
}

// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
	beforeAuth: (req, event) => {
		//console.log("Before Auth:", req.url)
		return customMiddleware(req)
	},
	publicRoutes: (req) => !req.url.includes("/members"),
	afterAuth(auth, req) {
		//console.log("userId", auth.userId)
		// Handle users who aren't authenticated
		if (!auth.userId && !auth.isPublicRoute) {
			//console.log("user not authenticated")
			return redirectToSignIn({ returnBackUrl: req.url })
		}
		// If the user is signed in and trying to access a protected route, allow them to access route
		if (auth.userId && !auth.isPublicRoute) {
			//console.log("user authenticated")
			return NextResponse.next()
		}
		// Allow users visiting public routes to access them
		return NextResponse.next()
	},
	// debug: true,
})

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
	publicRoutes: ["/", "/api/webhook", "/mentions", "/privacy", "/api/contact", "/studio"],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

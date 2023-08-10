// import {authMiddleware} from "@kinde-oss/kinde-auth-nextjs/server";

// export const config = {
//     matcher: [
//         /*
//          * Match all request paths except for the ones starting with:
//          * - api (API routes)
//          * - _next/static (static files)
//          * - _next/image (image optimization files)
//          * - favicon.ico (favicon file)
//          * - members (members-only pages)
//          */
//         "/((?!api|_next/static|_next/image|favicon.ico|members).*)"
//     ]
// };

// export default authMiddleware;

import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: ["/","/api/webhook","/mentions","/privacy"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

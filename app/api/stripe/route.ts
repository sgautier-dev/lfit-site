import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import logger from "@/lib/logger";
import { isAfter } from "date-fns";

const membersUrl = absoluteUrl("/members");

export async function GET() {
	try {
		const { userId } = auth();
		const user = await currentUser();

		if (!userId || !user) {
			return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
				status: 401,
			});
		}

		const userSubscription = await prisma.userSubscription.findUnique({
			where: { userId },
		});

		// if (userSubscription) {
		// 	if (userSubscription.stripeCustomerId) {
		// 		const stripeSession = await stripe.billingPortal.sessions.create({
		// 			customer: userSubscription.stripeCustomerId,
		// 			return_url: membersUrl,
		// 		});
		// 		return new NextResponse(JSON.stringify({ url: stripeSession.url }));
		// 	} else {
		// 		return new NextResponse("Stripe customer ID not found", {
		// 			status: 404,
		// 		});
		// 	}
		// }

		const currentDate = new Date();

		if (
			!userSubscription ||
			!isAfter(new Date(userSubscription.subscriptionEndDate), currentDate)
		) {
			const stripeSession = await stripe.checkout.sessions.create({
				success_url: membersUrl,
				cancel_url: membersUrl,
				payment_method_types: ["card", "paypal"],
				mode: "payment",
				billing_address_collection: "auto",
				allow_promotion_codes: true,
				customer_email: user.emailAddresses[0].emailAddress,
				line_items: [
					{
						price: process.env.STRIPE_PRICE_ID,
						quantity: 1,
					},
				],
				metadata: {
					userId: userId,
				},
			});
			return new NextResponse(JSON.stringify({ url: stripeSession.url }));
		} else {
			return new NextResponse(
				JSON.stringify({ error: "Vous êtes déjà abonné en premium" }),
				{ status: 400 }
			);
		}
	} catch (error) {
		logger.error("Error in stripe route: ", error);
		return new NextResponse(
			JSON.stringify({ error: "Internal Server Error" }),
			{ status: 500 }
		);
	}
}

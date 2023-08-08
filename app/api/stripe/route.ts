import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const membersUrl = absoluteUrl("/members");

export async function GET() {
	try {
		const { userId } = auth();
		const user = await currentUser();

		if (!userId || !user) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		// console.log("DATABASE_URL:", process.env.DATABASE_URL);
		// console.log("Stripe userId: ", userId);
		// const userSubscription = await prisma.userSubscription.findUnique({
		// 	where: { userId },
		// });

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

		const stripeSession = await stripe.checkout.sessions.create({
			success_url: membersUrl,
			cancel_url: membersUrl,
			payment_method_types: ["card", "paypal"],
			mode: "payment",
			billing_address_collection: "auto",
			customer_email: user.emailAddresses[0].emailAddress,
			line_items: [
				{
					price_data: {
						currency: "eur",
						product_data: {
							name: "Abonnement L.FIT",
							description: "accès premium à toutes les vidéos",
						},
						unit_amount: 1000,
					},
					quantity: 1,
				},
			],
			metadata: {
				userId: userId,
			},
		});

		return new NextResponse(JSON.stringify({ url: stripeSession.url }));
	} catch (error) {
		console.log("[STRIPE_GET]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}

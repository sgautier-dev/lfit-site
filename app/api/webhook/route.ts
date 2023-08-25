import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { addYears, addMinutes } from "date-fns";

export async function POST(req: Request) {
	const body = await req.text();
	const signature = headers().get("Stripe-Signature") as string;
	let event: Stripe.Event;
	const stripeWebHookSecret = process.env.STRIPE_WEBHOOK_SECRET;

	if (!stripeWebHookSecret) {
		return new NextResponse("Stripe Webhook secret not found", { status: 500 });
	}

	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			stripeWebHookSecret
		);
	} catch (err: any) {
		return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
	}

	const session = event.data.object as Stripe.Checkout.Session;

	if (event.type === "checkout.session.completed") {
		// Ensure it's a one-time payment
		if (session.mode === "payment" && session.payment_status === "paid") {
			const paymentIntent = await stripe.paymentIntents.retrieve(
				session.payment_intent as string
			);

			const userId = session?.metadata?.userId;
			if (!userId) {
				return new NextResponse("User ID not found", { status: 400 });
			}

			const currentDate = new Date(); // today's date
			const endDate = addMinutes(currentDate, 1);

			await prisma.userSubscription.upsert({
				where: { userId },
				create: {
					userId,
					subscriptionStartDate: currentDate,
					subscriptionEndDate: endDate,
					stripePaymentIntentId: paymentIntent.id,
					status: paymentIntent.status as string,
				},
				update: {
					subscriptionStartDate: currentDate,
					subscriptionEndDate: endDate,
					stripePaymentIntentId: paymentIntent.id,
					status: paymentIntent.status as string,
				},
			});
		}
	}

	return new NextResponse(
		JSON.stringify({ message: "Subscription processed successfully." }),
		{ status: 200 }
	);
}

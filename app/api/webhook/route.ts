import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { addYears, addMinutes } from "date-fns";

/*
  Is a webhook handler that processes a Stripe checkout session. It receives a request with a body and a signature, and verifies the signature to ensure the request is authentic. 
  It then constructs the event object using the Stripe library and checks if the event type is correct. 
  If it is, it checks if the session is paid and retrieves the payment intent ID and user ID from the session metadata. 
  It then updates or creates a user subscription record in the prisma database with the payment details and subscription dates. Finally, it returns a response indicating the success of the subscription processing.
*/
export async function POST(req: Request) {
	const body = await req.text();
	const signature = headers().get("Stripe-Signature") as string;
	let event: Stripe.Event;
	const stripeWebHookSecret = process.env.STRIPE_WEBHOOK_SECRET;

	if (!body || typeof body !== "string") {
		return new NextResponse("Invalid request body", { status: 400 });
	}

	if (!signature || typeof signature !== "string") {
		return new NextResponse("Invalid request signature", { status: 400 });
	}

	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			stripeWebHookSecret!
		);
	} catch (err: any) {
		return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
	}

	const session = event.data.object as Stripe.Checkout.Session;

	if (event.type === "checkout.session.completed") {
		// Ensure it is paid
		if (session.payment_status === "paid") {
			const paymentIntentId = session.payment_intent as string;

			const userId = session?.metadata?.userId;
			if (!userId) {
				return new NextResponse("User ID not found", { status: 400 });
			}

			//setting subscription end date
			const currentDate = new Date();
			const endDate = addYears(currentDate, 1);

			await prisma.userSubscription.upsert({
				where: { userId },
				create: {
					userId,
					subscriptionStartDate: currentDate,
					subscriptionEndDate: endDate,
					stripePaymentIntentId: paymentIntentId,
					status: session.payment_status,
				},
				update: {
					subscriptionStartDate: currentDate,
					subscriptionEndDate: endDate,
					stripePaymentIntentId: paymentIntentId,
					status: session.payment_status,
				},
			});
		}
	}

	return new NextResponse(
		JSON.stringify({ message: "Subscription processed successfully." }),
		{ status: 200 }
	);
}

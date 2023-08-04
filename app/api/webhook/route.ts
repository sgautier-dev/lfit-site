import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

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
		const subscription = await stripe.subscriptions.retrieve(
			session.subscription as string
		);

		if (!session?.metadata?.userId) {
			return new NextResponse("User ID not found", { status: 400 });
		}
		await prisma.userSubscription.create({
			data: {
				userId: session?.metadata?.userId,
				stripeCustomerId: subscription.customer as string,
				stripeSubscriptionId: subscription.id,
				stripePriceId: subscription.items.data[0].price.id as string,
				status: subscription.status as string,
			},
		});
	}

	return new NextResponse(null, { status: 200 });
}

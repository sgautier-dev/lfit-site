import { auth, currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import prisma from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"
import logger from "@/lib/logger"
import { isAfter } from "date-fns"

const membersUrl = absoluteUrl("/members")

/*
  Stripe checkout route: checks if the user is authenticated and has a valid subscription. 
  If the user does not have a valid subscription, it creates a Stripe checkout session and returns the session URL. 
  If the user is already subscribed, it returns an error message.
*/
export async function GET() {
	try {
		const { sessionClaims } = auth()
		const customClaims = sessionClaims as CustomJwtSessionClaims
		const userId = customClaims.sub

		// const { userId } = auth()

		const user = await currentUser()

		if (!userId || !user) {
			return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
				status: 401,
			})
		}

		const userSubscription = await prisma.userSubscription.findUnique({
			where: { userId },
		})

		const currentDate = new Date()

		if (
			!userSubscription ||
			!isAfter(new Date(userSubscription.subscriptionEndDate), currentDate)
		) {
			const stripeSession = await stripe.checkout.sessions.create({
				success_url: membersUrl,
				cancel_url: membersUrl,
				payment_method_types: ["card"],
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
			})
			return new NextResponse(JSON.stringify({ url: stripeSession.url }))
		} else {
			return new NextResponse(
				JSON.stringify({ error: "Vous êtes déjà abonné en premium" }),
				{ status: 400 }
			)
		}
	} catch (error: any) {
		logger.error("Error in stripe route: ", error)
		return new NextResponse(
			JSON.stringify({ error: "Internal Server Error" }),
			{ status: 500 }
		)
	}
}

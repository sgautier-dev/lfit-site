import { auth } from "@clerk/nextjs"
import prisma from "./prismadb"
import logger from "./logger"
import { formatDateToFrench } from "./utils"
import { isBefore } from "date-fns"

const NO_SUBSCRIPTION = { isPremium: false, endDate: null }


/*
  Checks the subscription status of a user. 
  It uses the auth function from the @clerk/nextjs package to get the user's ID. If the user ID is not available, it returns an object indicating that the user does not have a subscription. Otherwise, it queries the database using Prisma to get the user's subscription end date. 
  If the subscription end date is not available, it also returns NO_SUBSCRIPTION. 
  If the subscription end date is available, it compares it with the current date to determine if the user's subscription is still active. 
  If the subscription is active, it returns an object indicating that the user has a premium subscription and the formatted subscription end date. 
  If any error occurs during the process, it logs the error and returns NO_SUBSCRIPTION.
*/
export const checkSubscription = async () => {
	const { sessionClaims } = auth()
	const customClaims = sessionClaims as CustomJwtSessionClaims
	const userId = customClaims.userId

	if (!userId) return NO_SUBSCRIPTION

	try {
		const userSubscription = await prisma.userSubscription.findUnique({
			where: {
				userId: userId,
			},
			select: {
				subscriptionEndDate: true,
			},
		})

		if (!userSubscription || !userSubscription.subscriptionEndDate) {
			return NO_SUBSCRIPTION
		}

		const currentDate = new Date()
		const isPremium = isBefore(
			currentDate,
			new Date(userSubscription.subscriptionEndDate)
		)

		if (!isPremium) {
			return NO_SUBSCRIPTION
		}

		return {
			isPremium,
			endDate: formatDateToFrench(userSubscription.subscriptionEndDate),
		}
	} catch (error) {
		logger.error("An error occurred in checkSubscription: ", error)
		return NO_SUBSCRIPTION
	}
}

import { auth } from "@clerk/nextjs";
import prisma from "./prismadb";
import logger from "./logger";
import { formatDateToFrench } from "./utils";
import { isBefore } from "date-fns";

const NO_SUBSCRIPTION = { isPremium: false, endDate: null };
export const checkSubscription = async () => {
	const { userId } = auth();

	if (!userId) return NO_SUBSCRIPTION;

	try {
		const userSubscription = await prisma.userSubscription.findUnique({
			where: {
				userId: userId,
			},
			select: {
				subscriptionEndDate: true,
			},
		});

		if (!userSubscription || !userSubscription.subscriptionEndDate) {
			return NO_SUBSCRIPTION;
		}

		const currentDate = new Date();
		const isPremium = isBefore(
			currentDate,
			new Date(userSubscription.subscriptionEndDate)
		);

		if (!isPremium) {
			return NO_SUBSCRIPTION;
		}

		return {
			isPremium,
			endDate: formatDateToFrench(userSubscription.subscriptionEndDate),
		};
	} catch (error) {
		logger.error('An error occurred in checkSubscription: ',error);
		return NO_SUBSCRIPTION;
	}
};

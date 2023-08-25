import { auth } from "@clerk/nextjs";
import prisma from "./prismadb";
import logger from "./logger";
import { formatDateToFrench } from "./utils";

export const checkSubscription = async () => {
	const { userId } = auth();

	if (!userId) return { isPremium: false, endDate: null };

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
			return { isPremium: false, endDate: null };
		}

		const isPremium =
			new Date() < new Date(userSubscription.subscriptionEndDate);

		if (!isPremium) {
			return { isPremium: false, endDate: null };
		}

		return {
			isPremium,
			endDate: formatDateToFrench(userSubscription.subscriptionEndDate),
		};
	} catch (error) {
		logger.error(error);
		return { isPremium: false, endDate: null };
	}
};

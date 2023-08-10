import { auth } from "@clerk/nextjs";
import prisma from "./prismadb";
import logger from "./logger";

export const checkSubscription = async () => {
	const { userId } = auth();

	if (!userId) return false;

	try {
		const userSubscription = await prisma.userSubscription.findUnique({
			where: {
				userId: userId,
			},
			select: {
				// stripeCustomerId: true,
				stripePaymentIntentId: true,
			},
		});
		if (!userSubscription) return false;

		return true;
	} catch (error) {
		logger.error(error);
		return false;
	}
};

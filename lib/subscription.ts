import { auth } from "@clerk/nextjs";
import prisma from "./prismadb";

export const checkSubscription = async () => {
	const { userId } = auth();

	if (!userId) return false;

	try {
		const userSubscription = await prisma.userSubscription.findUnique({
			where: {
				userId: userId,
			},
			select: {
				stripeCustomerId: true,
				stripeSubscriptionId: true,
			},
		});
		if (!userSubscription) return false;

		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};

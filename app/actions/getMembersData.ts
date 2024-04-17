'use server'
import getVideos from "@/sanity/lib/getVideos"
import { checkSubscription } from "@/lib/subscription"
export default async function getMembersData() {
	try {
		// Parallel fetching of videos and subscription status
		const [videos, subscription] = await Promise.all([
			getVideos(),
			checkSubscription(),
		])

		return {
			videos,
			endDate: subscription.endDate,
			isPremium: subscription.isPremium,
		}
	} catch (error) {
		// Log the error or handle it as needed
		console.error("Failed to fetch videos and subscription data:", error)
		throw new Error("Failed to fetch videos and subscription data")
	}
}
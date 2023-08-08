"use client"
import { useState } from "react";
import { redirect } from "next/navigation";

export default function SubscriptionButton() {
	const [loading, setLoading] = useState(false);

	const handleSubscribeClick = async () => {
		try {
			setLoading(true);
			const res = await fetch("/api/stripe", { method: "GET" });
			const { url } = await res.json();

			if (res.ok && url) {
				redirect(url);
			} else {
				console.error("Failed to create Stripe session");
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		// <div className="hidden sm:flex sm:justify-center">
		// 	<div className="relative rounded-full px-3 py-1 text-lg leading-6 ring-2 ring-pinkCust/50 hover:ring-pinkCust">
		// 		Abonnez-vous pour profiter de toutes les vidéos.{" "}
		// 		<a href="#" className="font-semibold text-pinkCust">
		// 			<span className="absolute inset-0" aria-hidden="true" />
		// 			<span aria-hidden="true">&rarr;</span>
		// 		</a>
		// 	</div>
		// </div>
		<div className="hidden sm:flex sm:justify-center">
			<button
				className={`relative rounded-full px-3 py-1 text-lg leading-6 ring-2 ring-pinkCust/50 hover:ring-pinkCust ${
					loading ? "opacity-50 cursor-not-allowed" : ""
				}`}
				onClick={handleSubscribeClick}
				disabled={loading}
			>
				Abonnez-vous pour profiter de toutes les vidéos.
				<span className="font-semibold text-pinkCust">
					<span className="absolute inset-0" aria-hidden="true" />
					<span aria-hidden="true">&rarr;</span>
				</span>
			</button>
		</div>
	);
}

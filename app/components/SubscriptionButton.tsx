"use client";
import { useState } from "react";

interface SubscriptionButtonProps {
	isPremium: boolean;
	endDate?: string | null;
}
export default function SubscriptionButton({
	isPremium,
	endDate,
}: SubscriptionButtonProps) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubscribeClick = async () => {
		try {
			setLoading(true);
			const res = await fetch("/api/stripe", { method: "GET" });
			const data = await res.json();

			if (data.error) {
				setError(data.error);
				setTimeout(() => setError(""), 5000); // Revert the error message after 5 seconds
			} else if (data.url) {
				window.location.href = data.url;
			} else {
				console.error("Failed to create Stripe session");
			}
		} catch (error) {
			setError("Erreur du serveur de paiement. Réessayez plus tard.");
			setTimeout(() => setError(""), 5000);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const buttonText = () => {
		if (loading) return "En cours de chargement...";
		if (error) return error;
		if (endDate) return `Votre abonnement premium prendra fin le ${endDate}`;
		return "Abonnez-vous pour profiter de toutes les vidéos";
	};

	return (
		<div className="flex justify-center">
			<button
				className={`relative rounded-full px-3 py-1 sm:text-lg leading-6 ring-4 ring-pinkCust/50 hover:ring-pinkCust ${
					loading ? "opacity-50 cursor-not-allowed" : ""
				}`}
				onClick={handleSubscribeClick}
				disabled={loading || isPremium}
			>
				{buttonText()} {""}
				{!loading && !error && !isPremium && (
					<span className="font-semibold text-pinkCust">
						<span className="absolute inset-0" aria-hidden="true" />
						<span aria-hidden="true">&rarr;</span>
					</span>
				)}
			</button>
		</div>
	);
}

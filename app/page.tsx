"use client";
import { useState, useEffect } from "react";
// import "intersection-observer"; //fallback polyfill in case of some older browser versions
import Hero from "./components/Hero";
import Formation from "./components/Formation";
import Cours from "./components/Cours";
import Wellness from "./components/Wellness";
import Refining from "./components/Refining";
import Toning from "./components/Toning";
import Coaching from "./components/Coaching";
import Contact from "./components/Contact";
import Planning from "./components/Planning";
import CookiesMod from "./components/cookiesModal";

export default function Home() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const cookieConsent = localStorage.getItem("cookieConsent");

		if (cookieConsent === null) {
			setShowModal(true);
		}
	}, []);
	return (
		<main className="relative mx-auto min-h-screen font-judson">
			{showModal && <CookiesMod />}
			<Hero />
			<Formation />
			<Cours />
			<Wellness />
			<Refining />
			<Toning />
			<Planning />
			<Coaching />
			<Contact />
		</main>
	);
}

"use client";
import { useState, useEffect } from "react";
import CookiesMod from "./cookiesModal";

export default function Cookies() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const cookieConsent = localStorage.getItem("cookieConsent");

		if (cookieConsent === null) {
			setShowModal(true);
		}
	}, []);
	return <div>{showModal && <CookiesMod />}</div>;
}

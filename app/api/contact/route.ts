import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";
const nodemailer = require("nodemailer");
import { getRecaptchaVerificationUrl } from "@/lib/utils";

// Create a transporter object with SMTP configuration
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: process.env.SMTP_PORT == "465", // true for 465, false for other ports
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
	// logger: true, //in dev for debugging
	// debug: true, // include SMTP traffic in the logs
});

/*
Contact form route: validates the request body, 
verifies a reCAPTCHA token, 
sends an email using SMTP, 
and returns a response based on the success or failure of these operations.
*/
export async function POST(req: NextRequest) {
	let data;
	try {
		data = await req.json();
	} catch (error) {
		return NextResponse.json(
			{ message: "Invalid JSON data in the request body" },
			{ status: 400 }
		);
	}
	const { firstName, lastName, email, message, token } = data;

	if (!email || !firstName || !lastName || !message)
		return NextResponse.json(
			{ message: "Tous les champs du formulaire sont requis !" },
			{ status: 400 }
		);

	try {
		const verifyRecaptchaUrl = getRecaptchaVerificationUrl(token);
		const verifyRecaptcha = await fetch(verifyRecaptchaUrl).catch((error) => {
			throw new Error("Failed to fetch reCAPTCHA verification URL");
		});

		const responseRecaptcha = await verifyRecaptcha.json();

		if (!responseRecaptcha.success) {
			return NextResponse.json(
				{
					message: "La vérification reCAPTCHA a échoué !",
				},
				{ status: 400 }
			);
		}

		const sendMailPromise = transporter.sendMail({
			from: process.env.SMTP_USER,
			to: process.env.SMTP_USER,
			replyTo: `${firstName} ${lastName} <${email}>`,
			subject: "Nouveau message du site L.FIT",
			text: `Vous avez reçu un message de ${firstName} ${lastName} <${email}>:\n${message}`,
		});

		//for avoiding indefinite hangs if SMTP is slow or unresponsive
		const sendMailResult = await Promise.race([
			sendMailPromise,
			new Promise((resolve, reject) =>
				setTimeout(() => reject(new Error("sendMail timed out")), 5000)
			),
		]);

		if (!sendMailResult) {
			throw new Error("sendMail failed or timed out");
		}

		return NextResponse.json(
			{
				message: "E-mail envoyé avec succès !",
			},
			{ status: 200 }
		);
	} catch (error: any) {
		logger.error(error);
		const { title, detail, status } = error.response?.body || {};
		return NextResponse.json(
			{ title: title, detail: detail, message: "Échec de l'envoi" },
			{ status: status || 500 }
		);
	}
}

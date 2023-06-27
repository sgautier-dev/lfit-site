import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";
const nodemailer = require("nodemailer");

if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.RECAPTCHA_SECRET_KEY) {
	throw new Error("Missing required environment variables");
}

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

export async function POST(req: NextRequest) {
	const { firstName, lastName, email, message, token } = await req.json();

	const verifyRecaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

	// console.log("data: ", `${firstName} ${lastName} ${email} ${message}`);

	if (!email || !firstName || !lastName || !message)
		return NextResponse.json(
			{ message: "Tous les champs du formulaire sont requis !" },
			{ status: 400 }
		);

	try {
		const verifyRecaptcha = await fetch(verifyRecaptchaUrl);
		const responseRecaptcha = await verifyRecaptcha.json();

		if (!responseRecaptcha.success) {
			return NextResponse.json(
				{
					message: "La vérification reCAPTCHA a échoué !",
				},
				{ status: 400 }
			);
		}

		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to: process.env.SMTP_USER,
			replyTo: `${firstName} ${lastName} <${email}>`,
			subject: "Nouveau message du site L.FIT",
			text: `Vous avez reçu un message de ${firstName} ${lastName} <${email}>:\n${message}`,
		});

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

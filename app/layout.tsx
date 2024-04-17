import "./globals.css"
import "../lib/validateEnv"
import Header from "./components/Header"
import { Exo_2, Days_One, Great_Vibes, Caramel, Judson } from "next/font/google"
import Footer from "./components/Footer"

const exo = Exo_2({
	subsets: ["latin"],
	variable: "--font-exo",
	display: "swap",
})

const days = Days_One({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-days",
	display: "swap",
})

const vibes = Great_Vibes({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-vibes",
	display: "swap",
})

const caramel = Caramel({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-caramel",
	display: "swap",
})

const judson = Judson({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-judson",
	display: "swap",
})

export const metadata = {
	title: "L.FIT - Votre Coach Fitness à La Réunion",
	description:
		"Lynda, coach sportive certifiée à La Réunion, propose des séances de fitness adaptées pour tous les niveaux. Découvrez votre potentiel et sentez-vous bien dans votre corps",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="fr"
			className={`${exo.variable} ${days.variable} ${vibes.variable} ${caramel.variable} ${judson.variable}`}
		>
			<body className="bg-white">{children}</body>
		</html>
	)
}

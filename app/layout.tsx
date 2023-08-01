import "./globals.css";
import Header from "./components/Header";
import {
	Exo_2,
	Days_One,
	Great_Vibes,
	Caramel,
	Judson,
} from "next/font/google";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";

const exo = Exo_2({
	subsets: ["latin"],
	variable: "--font-exo",
	display: "swap",
});

const days = Days_One({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-days",
	display: "swap",
});

const vibes = Great_Vibes({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-vibes",
	display: "swap",
});

const caramel = Caramel({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-caramel",
	display: "swap",
});

const judson = Judson({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-judson",
	display: "swap",
});

export const metadata = {
	title: "L.FIT - Votre Coach Fitness à La Réunion",
	description:
		"Lynda, coach sportive certifiée à La Réunion, propose des séances de fitness adaptées pour tous les niveaux. Découvrez votre potentiel et sentez-vous bien dans votre corps",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider localization={frFR}>
			<html
				lang="fr"
				className={`${exo.variable} ${days.variable} ${vibes.variable} ${caramel.variable} ${judson.variable}`}
			>
				<body className="bg-white">
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}

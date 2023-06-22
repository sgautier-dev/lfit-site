import "./globals.css";
import Header from "./components/Header";
import { Exo_2, Days_One, Great_Vibes, Caramel, Judson } from "next/font/google";
import Footer from "./components/Footer";

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
	title: "L.FIT votre coach fitness",
	description: "Lynda coach fitness à la Réunion",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={`${exo.variable} ${days.variable} ${vibes.variable} ${caramel.variable} ${judson.variable}`}>
			<body className="bg-white">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

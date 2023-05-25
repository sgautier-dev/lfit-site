import "./globals.css";
import Header from "./components/Header";
import { Exo_2, Days_One } from "next/font/google";
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

export const metadata = {
	title: "L.FIT votre coach fitness",
	description: "Lynda coach fitness à la Réunion",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={`${exo.variable} ${days.variable}`}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

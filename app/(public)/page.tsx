// import "intersection-observer"; //fallback polyfill in case of some older browser versions
import Hero from "../components/Hero"
import Formation from "../components/Formation"
import Cours from "../components/Cours"
import Wellness from "../components/Wellness"
import Refining from "../components/Refining"
import Toning from "../components/Toning"
import Coaching from "../components/Coaching"
import Contact from "../components/Contact"
import Planning from "../components/Planning"
// import Cookies from "../components/Cookies"
import type { Metadata } from "next"

export const metadata: Metadata = {
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
		},
	},
}

export default function Home() {
	return (
		<main className="relative mx-auto min-h-screen font-judson">
			{/* <Cookies /> */}
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
	)
}

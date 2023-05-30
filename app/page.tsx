import Image from "next/image";
import Hero from "./components/Hero";
import Formation from "./components/Formation";
import Cours from "./components/Cours";
import Wellness from "./components/Wellness";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen font-judson">
			<Hero />
			<Formation />
			<Cours />
			<Wellness/>
		</main>
	);
}

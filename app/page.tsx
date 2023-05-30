import Image from "next/image";
import Hero from "./components/Hero";
import Formation from "./components/Formation";
import Cours from "./components/Cours";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen font-judson">
			<Hero />
			<Formation />
			<Cours />
		</main>
	);
}

import Image from "next/image";
import Hero from "./components/Hero";
import Formation from "./components/Formation";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen font-judson">
			<Hero />
      <Formation/>
		</main>
	);
}

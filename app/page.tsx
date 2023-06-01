import Hero from "./components/Hero";
import Formation from "./components/Formation";
import Cours from "./components/Cours";
import Wellness from "./components/Wellness";
import Refining from "./components/Refining";
import Toning from "./components/Toning";
import Coaching from "./components/Coaching";
import Contact from "./components/Contact";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen font-judson">
			<Hero />
			<Formation />
			<Cours />
			<Wellness />
			<Refining />
			<Toning />
			<Coaching />
			<Contact />
		</main>
	);
}

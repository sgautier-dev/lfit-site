import Image from "next/image";
import getHero from "@/sanity/lib/getHero";
import heroPic from "@/public/images/LiliSushi04_WhiteBorder-500X718.jpg"
import heroBackPic from "@/public/images/sean-oulashin-KMn4VEeEPR8-unsplash-2400X1595.jpg"

export default async function Hero() {
	const hero = await getHero();
	return (
		<div className="relative xl:mx-auto xl:max-w-7xl xl:px-8 ">
			<h1 className="absolute inset-x-0 top-0 text-center text-9xl font-caramel pt-10  text-pinkCust">
				<span className="font-vibes p-2 bg-gradient-to-r from-pinkCust to-amber-300 bg-clip-text text-transparent text-[150px]">
					L.
				</span>{" "}
				FIT
			</h1>
			<div className="grid lg:grid-cols-2 items-start pt-32 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
				<Image
					src={heroPic}
					placeholder="blur"
					alt="Lynda votre coach fitness à la réunion"
					width={400}
					height={500}
					className="aspect-auto object-cover px-6"
					priority
				/>
				<div className="bg-white/80 rounded-xl p-6">
					<h2 className="text-center text-xl font-bold tracking-tight">
						{hero.title}
					</h2>
					<p className="mt-2">{hero.text}</p>
					<a
						href="#contact"
						className="inline-flex items-center mt-4 rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust/80"
					>
						Me Contacter
					</a>
				</div>
			</div>

			<Image
				src={heroBackPic}
				placeholder="blur"
				alt="votre coach fitness sur la plage, ermitage la réunion"
				width={2002}
				height={1907}
				sizes="(min-width: 1360px) 1280px, calc(94.23vw + 17px)"
				className="absolute inset-0 -z-10 aspect-[16/9] xl:aspect-[9/4] w-full object-cover"
				priority
			/>
		</div>
	);
}

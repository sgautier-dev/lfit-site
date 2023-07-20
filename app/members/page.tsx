import Videos from "../components/Videos";
import getVideos from "@/sanity/lib/getVideos";
import Image from "next/image";

export default async function Members() {
	const videos = await getVideos();

	return (
		<main className="relative mx-auto min-h-screen font-judson">
			<Image
				src="/images/felipe-correia-ScQngs6oO1E-unsplash-1920X1280.jpg"
				alt="Lynda votre coach fitness à la réunion"
				width={1920}
				height={1280}
				sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>
			<div className="isolate mx-auto max-w-7xl py-14 px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
						Espace membres
					</h2>
					<p className="mt-6 text-lg">
						Ici, le sport ne s&apos;arrête jamais. Profitez de vos séances
						d&apos;entraînement préférées - Stretching, Pilates, Yogalates,
						Cardio et plus encore - à tout moment, n&apos;importe où. Ne laissez
						jamais vos vacances interrompre votre rythme, restez en forme avec
						LFIT. Bon entrainement!
					</p>
				</div>
				<Videos videos={videos} />
			</div>
		</main>
	);
}

import Videos from "../components/Videos";
import getVideos from "@/sanity/lib/getVideos";

export default async function Members() {
    const videos = await getVideos();

	return (
		<main className="relative mx-auto min-h-screen font-judson">
			<div className="isolate mx-auto max-w-7xl py-14 px-6 lg:px-8">
				<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
					Espace membres
				</h2>
				<Videos videos={videos} />
			</div>
		</main>
	);
}

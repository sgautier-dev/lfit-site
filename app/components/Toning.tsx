import Image from "next/image";
import getToning from "@/sanity/lib/getToning";
import PracticesCloud from "./PracticesCloud";

export default async function Toning() {
	const toning = await getToning();

	return (
		<div className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8">
			<Image
				src={toning.backgroundImage}
				alt="Lynda votre coach fitness à la réunion"
				width={2400}
				height={1600}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
						{toning.title}
					</h2>
					<p className="mt-6 text-lg">{toning.presentation}</p>
				</div>

				{/* cloud */}

				<div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
					<PracticesCloud practices={toning.practices} />
				</div>
			</div>
		</div>
	);
}

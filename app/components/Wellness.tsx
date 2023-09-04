import Image from "next/image";
import getWellness from "@/sanity/lib/getWellness";

export default async function Wellness() {
	const wellness = await getWellness();

	return (
		<div className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8">
			<Image
				src={wellness.backgroundImage}
				alt="Lynda votre coach fitness à la réunion"
				width={3000}
				height={3000}
				sizes="(min-width: 1360px) 1280px, calc(94.23vw + 17px)"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
						{wellness.title}
					</h2>
					<p className="mt-6 text-lg">{wellness.presentation}</p>
				</div>

				{/* cloud */}
				<div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
					<div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2 lg:grid-cols-3">
						{wellness.practices.map((practice) => (
							<div key={practice._id} className="bg-grayCust/40 p-6 sm:p-10">
								<div className="grid grid-cols-2 items-center">
									<Image
										className="max-h-12 w-full object-contain"
										src={practice.icon.value}
										alt={`${practice.icon.title} lynda fit`}
										width={60}
										height={60}
									/>
									<p className="text-2xl font-bold tracking-tight">
										{practice.name}
									</p>
								</div>
								<p className="mt-2">{practice.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

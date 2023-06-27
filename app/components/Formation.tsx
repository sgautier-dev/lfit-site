import Image from "next/image";
// import { InView } from "react-intersection-observer";
import getFormation from "@/sanity/lib/getFormation";

export default async function Formation() {
	const formation = await getFormation();

	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="formation"
		>
			<Image
				src={formation.backgroundImage}
				alt="Lynda votre coach fitness à la réunion"
				width={2002}
				height={1907}
				sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
						{formation.title}
					</h2>
					<p className="mt-6 text-lg">{formation.presentation}</p>
				</div>

				{/* training cloud */}

				<div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
					{/* <InView threshold={0.5} triggerOnce>
						{({ inView, ref }) => (
							<div ref={ref}>
								<div
									className={`-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 transition-transform duration-500`}
								>
									{formation.formations.map((item) => (
										<div
											className={`grid grid-cols-2 items-center bg-grayCust/60 p-6 sm:p-10 ${
												inView ? "animate-scale" : "opacity-0 scale-20"
											}`}
											key={item._id}
										>
											<Image
												className="max-h-12 w-full object-contain"
												src={item.icon.value}
												alt={item.icon.title}
												width={60}
												height={60}
											/>
											<p className="text-2xl font-bold tracking-tight uppercase">
												{item.title}
											</p>
										</div>
									))}
								</div>
							</div>
						)}
					</InView> */}

					<div
						className={`-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 transition-transform duration-500`}
					>
						{formation.formations.map((item) => (
							<div
								className="grid grid-cols-2 items-center bg-grayCust/60 p-6 sm:p-10"
								key={item._id}
							>
								<Image
									className="max-h-12 w-full object-contain"
									src={item.icon.value}
									alt={item.icon.title}
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight uppercase">
									{item.title}
								</p>
							</div>
						))}
					</div>

					{/* diploma cloud */}
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
						{formation.diplomas.map((item) => (
							<div key={item._id}>
								<Image
									className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
									src={item.image}
									alt={item.title}
									width={248}
									height={224}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

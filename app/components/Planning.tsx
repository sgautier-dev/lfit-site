import Image from "next/image";
import { Fragment } from "react";
import getSchedule from "@/sanity/lib/getSchedule";

// const schedule = [
// 	{
// 		date: "Lundi",
// 		sessions: [
// 			{
// 				id: 1,
// 				start: "17:00",
// 				end: "17:50",
// 				course: "Pilates ballon paille",
// 				duration: "50 mins",
// 				description:
// 					"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
// 				icon: "/images/icons8-pilates-30.png",
// 			},
// 			{
// 				id: 2,
// 				start: "17:50",
// 				end: "18:35",
// 				course: "Stretching relaxation",
// 				duration: "45 mins",
// 				description:
// 					"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
// 				icon: "/images/icons8-stratching-30.png",
// 			},
// 		],
// 	},
// 	{
// 		date: "Mardi",
// 		sessions: [
// 			{
// 				id: 4,
// 				start: "17:30",
// 				end: "18:20",
// 				course: "Yogalates",
// 				duration: "50 mins",
// 				description:
// 					"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
// 				icon: "/images/icons8-fitnessBis-30.png",
// 			},
// 		],
// 	},
// ];

export default async function Planning() {
	const schedule = await getSchedule();
	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="planning"
		>
			<Image
				src="/images/cours_plage_lyndafit-2097X2072.jpg"
				alt="Lynda votre coach fitness à la réunion"
				width={2097}
				height={2072}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						Les Séances sur la Plage
					</h2>
					<p className="mt-6 text-lg">Un programme qui évolue avec vous.</p>
				</div>

				<div className="mt-6 overflow-hidden border-2 border-pinkCust rounded-lg">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
							<table className="w-full text-left">
								<thead className="sr-only">
									<tr>
										<th>Cours</th>
										<th className="hidden sm:table-cell">Description</th>
										<th>Heure</th>
									</tr>
								</thead>
								<tbody>
									{schedule.map((day) => (
										<Fragment key={day.date}>
											<tr className="text-4xl font-caramel leading-6">
												<th
													scope="colgroup"
													colSpan={3}
													className="relative isolate py-2 font-semibold "
												>
													{day.date}
													<div className="absolute inset-y-0 right-full -z-10 w-screen border-b-2 border-grayCust bg-grayCust" />
													<div className="absolute inset-y-0 left-0 -z-10 w-screen border-b-2 border-grayCust bg-grayCust" />
												</th>
											</tr>
											{day.sessions.map((session) => (
												<tr key={session._id}>
													<td className="relative py-5 pr-6">
														<div className="flex gap-x-6">
															<Image
																className="object-contain"
																src={session.icon}
																alt="pilates lynda fit"
																width={30}
																height={30}
																aria-hidden="true"
															/>
															<div className="flex-auto">
																<div className="flex items-start gap-x-3">
																	<div className="text-sm font-medium leading-6 text-black">
																		{session.course}
																	</div>
																	<div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset ring-pinkCust">
																		{session.duration} mins
																	</div>
																</div>
															</div>
														</div>
														<div className="absolute bottom-0 right-full h-px w-screen bg-grayCust" />
														<div className="absolute bottom-0 left-0 h-px w-screen bg-grayCust" />
													</td>
													<td className="hidden py-5 pr-6 sm:table-cell">
														<div className="text-sm leading-6 text-darkGrayCust/80">
															{session.description}
														</div>
													</td>
													<td className="py-5 text-right">
														<div className="text-sm font-medium leading-6">
															{session.start}
															{"-"}
															{session.end}
														</div>
													</td>
												</tr>
											))}
										</Fragment>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

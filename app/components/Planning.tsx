import Image from "next/image"
import { Fragment } from "react"
import getSeances from "@/sanity/lib/getSeances"

export default async function Planning() {
	const seances = await getSeances()

	if ("empty" in seances) {
		// notFound();
		throw new Error("oups pas de donnée")
	}
	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="planning"
		>
			<Image
				src={seances.backgroundImage}
				alt="Lynda votre coach fitness à la réunion"
				width={2097}
				height={2072}
				sizes="(min-width: 1360px) 1280px, calc(94.23vw + 17px)"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
						{seances.title}
					</h2>
					<div className="grid gap-8">
						<p className="mt-6 text-lg">{seances.presentation}</p>
						<a
							href="https://www.supersaas.fr/schedule/wellness_beach_fitness/AGENDA"
							className="ml-auto rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust"
							target="_blank"
						>
							Réserver
						</a>
					</div>
				</div>

				{/* cloud */}
				<div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
					<div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2 lg:grid-cols-3">
						{seances.schedule.map((day) => (
							<Fragment key={day.date}>
								<div className="bg-grayCust/40 p-6 sm:p-10">
									<p className="text-2xl text-left font-bold tracking-tight">
										{day.date}
									</p>
									{day.sessions && day.sessions.length > 0 ? (
										day.sessions.map((session) => (
											<div
												className="mt-4 flex gap-x-6 text-lg"
												key={`${session.course}-${session.start}-${session.end}`}
											>
												<Image
													className="object-contain"
													src={session.icon}
													alt={`${session.course} icon`}
													width={30}
													height={30}
													aria-hidden="true"
												/>

												<div className="flex-auto">
													<div className="flex flex-col items-start gap-x-3">
														<div className="font-medium leading-6 text-black">
															{session.course}
														</div>
														<div className="flex gap-x-3">
															<div className="mt-1 font-medium leading-5  text-pinkCust">
																{session.start}
																{"-"}
																{session.end}
																<div className="h-px w-full bg-darkGrayCust/50" />
															</div>
															<div className="rounded-md py-1 px-2 text-sm font-medium ring-1 ring-inset ring-pinkCust">
																{session.duration} mins
															</div>
														</div>
													</div>
												</div>
											</div>
										))
									) : (
										<p className="font-medium leading-6 text-black">
											Aucune séance pour ce jour.
										</p>
									)}
								</div>
							</Fragment>
						))}
					</div>
				</div>

				{/* <div className="mt-6 overflow-hidden border-2 border-pinkCust rounded-lg shadow-md shadow-pinkCust/50">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
							<table className="w-full text-left">
								<thead className="sr-only">
									<tr>
										<th>Cours</th>
										<th className="hidden sm:table-cell">Description</th>
										<th>Durée</th>
									</tr>
								</thead>
								<tbody>
									{schedule.map((day) => (
										<Fragment key={day.date}>
											<tr className="text-4xl font-caramel leading-6">
												<th
													scope="colgroup"
													colSpan={3}
													className="relative isolate py-2 font-semibold"
												>
													{day.date}
													<div className="absolute inset-y-0 right-full -z-10 w-screen border-b-2 border-grayCust bg-grayCust" />
													<div className="absolute inset-y-0 left-0 -z-10 w-screen border-b-2 border-grayCust bg-grayCust" />
												</th>
											</tr>
											{day.sessions.map((session) => (
												<tr
													key={session._id}
													className="transition-colors duration-200 hover:bg-white/40"
												>
													<td className="relative py-5 pr-6">
														<div className="flex gap-x-6">
															<Image
																className="object-contain"
																src={session.icon}
																alt={`${session.course} icon`}
																width={30}
																height={30}
																aria-hidden="true"
															/>
															<div className="flex-auto">
																<div className="flex items-start gap-x-3">
																	<div className="text-lg font-medium leading-6 text-black">
																		{session.course}
																	</div>

																	<div className="mt-1 text-lg leading-5 text-pinkCust">
																		{session.start}
																		{"-"}
																		{session.end}
																	</div>
																</div>
															</div>
														</div>
														<div className="absolute bottom-0 right-full h-px w-screen bg-grayCust" />
														<div className="absolute bottom-0 left-0 h-px w-screen bg-grayCust" />
													</td>
													<td className="hidden py-5 pr-6 sm:table-cell">
														<div className="text-base leading-6 text-darkGrayCust">
															{session.description}
														</div>
													</td>
													<td className="py-5 text-center">
														<div className="rounded-md py-1 px-2 text-sm font-medium ring-1 ring-inset ring-pinkCust">
															{session.duration} mins
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
				</div> */}
			</div>
		</div>
	)
}

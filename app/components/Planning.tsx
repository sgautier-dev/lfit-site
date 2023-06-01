import Image from "next/image";
import { Fragment } from "react";


const days = [
	{
		date: "Lundi",
		dateTime: "2023-03-22",
		transactions: [
			{
				id: 1,
				invoiceNumber: "00012",
				href: "#",
				amount: "$7,600.00 USD",
				tax: "$500.00",
				status: "Paid",
				client: "Reform",
				description: "Website redesign",
				icon: "/images/icons8-pilates-30.png",
			},
			{
				id: 2,
				invoiceNumber: "00011",
				href: "#",
				amount: "$10,000.00 USD",
				status: "Withdraw",
				client: "Tom Cook",
				description: "Salary",
				icon: "/images/icons8-stratching-30.png",
			},
		],
	},
	{
		date: "Mardi",
		dateTime: "2023-03-21",
		transactions: [
			{
				id: 4,
				invoiceNumber: "00010",
				href: "#",
				amount: "$14,000.00 USD",
				tax: "$900.00",
				status: "Paid",
				client: "SavvyCal",
				description: "Website redesign",
				icon: "/images/icons8-fitnessBis-30.png",
			},
		],
	},
];

export default function Planning() {
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

				<div className="mt-6 overflow-hidden border border-pinkCust rounded-lg">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
							<table className="w-full text-left">
								<thead className="sr-only">
									<tr>
										<th>Amount</th>
										<th className="hidden sm:table-cell">Client</th>
										<th>More details</th>
									</tr>
								</thead>
								<tbody>
									{days.map((day) => (
										<Fragment key={day.dateTime}>
											<tr className="text-4xl font-caramel leading-6">
												<th
													scope="colgroup"
													colSpan={3}
													className="relative isolate py-2 font-semibold "
												>
													<time dateTime={day.date}>{day.date}</time>
													<div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-pinkCust bg-grayCust" />
													<div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-pinkCust bg-grayCust" />
												</th>
											</tr>
											{day.transactions.map((transaction) => (
												<tr key={transaction.id}>
													<td className="relative py-5 pr-6">
														<div className="flex gap-x-6">
															<Image
																className="object-contain"
																src={transaction.icon}
																alt="pilates lynda fit"
																width={30}
																height={30}
																aria-hidden="true"
															/>
															<div className="flex-auto">
																<div className="flex items-start gap-x-3">
																	<div className="text-sm font-medium leading-6 text-black">
																		{transaction.amount}
																	</div>
																	<div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset">
																		{transaction.status}
																	</div>
																</div>
																{transaction.tax ? (
																	<div className="mt-1 text-xs leading-5 text-gray-500">
																		{transaction.tax} tax
																	</div>
																) : null}
															</div>
														</div>
														<div className="absolute bottom-0 right-full h-px w-screen bg-grayCust" />
														<div className="absolute bottom-0 left-0 h-px w-screen bg-grayCust" />
													</td>
													<td className="hidden py-5 pr-6 sm:table-cell">
														<div className="text-sm leading-6 text-black">
															{transaction.client}
														</div>
														<div className="mt-1 text-xs leading-5 text-gray-500">
															{transaction.description}
														</div>
													</td>
													<td className="py-5 text-right">
														<div className="flex justify-end">
															<a
																href={transaction.href}
																className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
															>
																View
																<span className="hidden sm:inline">
																	{" "}
																	transaction
																</span>
																<span className="sr-only">
																	, invoice #{transaction.invoiceNumber},{" "}
																	{transaction.client}
																</span>
															</a>
														</div>
														<div className="mt-1 text-xs leading-5 text-gray-500">
															Invoice{" "}
															<span className="text-black">
																#{transaction.invoiceNumber}
															</span>
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

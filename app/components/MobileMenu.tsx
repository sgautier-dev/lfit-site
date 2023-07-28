"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/lib/navigation";
import Link from "next/link";

export default function MobileMenu() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className="flex lg:hidden">
				<button
					type="button"
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
					onClick={() => setMobileMenuOpen(true)}
				>
					<span className="sr-only">Open main menu</span>
					<Bars3Icon className="h-8 w-8" aria-hidden="true" />
				</button>
			</div>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-grayCust">
					<div className="flex items-center justify-between gap-x-6">
						<Link
							href="/"
							className="-m-1.5 p-1.5 font-exo font-black text-4xl text-pinkCust"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Lynda FIT</span>
							<p>L. FIT</p>
						</Link>
						{/* <a
							href="#"
							className="ml-auto rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust"
						>
							S&apos;inscrire
						</a> */}
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-darkGrayCust"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon
								className="h-8 w-8 text-darkGrayCust"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-grayCust/30">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-days leading-7 text-darkGrayCust hover:bg-grayCust/30"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								))}
							</div>
							{/* <div className="py-6">
								<Link
									href="/members"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-grayCust/30"
									onClick={() => setMobileMenuOpen(false)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6 text-pinkCust"
									>
										<path
											fillRule="evenodd"
											d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div> */}
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</>
	);
}

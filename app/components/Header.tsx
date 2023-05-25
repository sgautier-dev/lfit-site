"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/lib/navigation";


export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-10 bg-darkGrayCust text-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5 font-exo font-black text-4xl text-pinkCust">
						<span className="sr-only">Lynda FIT</span>
						<p>L. FIT</p>
					</a>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-days leading-6"
						>
							{item.name}
						</a>
					))}
				</div>
				<div className="flex flex-1 items-center justify-end gap-x-6">
					<a
						href="#"
						className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 text-pinkCust"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
					</a>
					<a
						href="#"
						className="rounded-md bg-pinkCust px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust"
					>
						S&apos;inscrire
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-grayCust">
					<div className="flex items-center gap-x-6">
						<a href="#" className="-m-1.5 p-1.5 font-exo font-black text-4xl text-pinkCust">
							<span className="sr-only">Lynda FIT</span>
							<p>L. FIT</p>
						</a>
						<a
							href="#"
							className="ml-auto rounded-md bg-pinkCust px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust"
						>
							S&apos;inscrire
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-darkGrayCust"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon
								className="h-6 w-6 text-darkGrayCust"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-grayCust/30">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-days leading-7 text-darkGrayCust hover:bg-grayCust/30"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-darkGrayCust hover:bg-grayCust/30"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6 text-pinkCust"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}

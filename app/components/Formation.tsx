"use client";
import Image from "next/image";
import { training } from "@/lib/formations";
import { diploma } from "@/lib/diplomes";
import { Transition } from "@headlessui/react";
import { InView } from "react-intersection-observer";

export default function Formation() {
	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="formation"
		>
			<Image
				src="/images/lynda-fit-formation-2002X1907.jpeg"
				alt="Lynda votre coach fitness à la réunion"
				width={2002}
				height={1907}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						Ma Formation
					</h2>
					<p className="mt-6 text-lg">
						Coach sportive depuis 2003, je suis titulaire du Brevet d’Etat
						d’Educateur Sportif Métiers de la Forme, mais aussi formée Les Mills
						(Body Pump, Body Balance, Body Combat, Body Attack), FFGYM,
						Instructeur de Zumba, FISAF, Pilates (petit matériel, femme enceinte
						et sénior, swiss ball, Matwork 1 et 2), et Yogalates.
					</p>
				</div>

				{/* training cloud */}

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					{/* <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
						{training.map((item) => (
							<div
								className="grid grid-cols-2 items-center bg-grayCust/60 p-6 sm:p-10"
								key={item.name}
							>
								<Image
									className="max-h-12 w-full object-contain"
									src={item.iconL}
									alt={item.name}
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">{item.name}</p>
							</div>
						))}
					</div> */}
					<InView threshold={0.5} triggerOnce>
						{({ inView, ref }) => (
							<div ref={ref}>
								<div
									className={`-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 transition-transform duration-500`}
								>
									{training.map((item) => (
										<div
											className={`grid grid-cols-2 items-center bg-grayCust/60 p-6 sm:p-10 ${
												inView ? "animate-scale" : "opacity-0 scale-20"
											}`}
											key={item.name}
										>
											<Image
												className="max-h-12 w-full object-contain"
												src={item.iconL}
												alt={item.name}
												width={60}
												height={60}
											/>
											<p className="text-2xl font-bold tracking-tight">
												{item.name}
											</p>
										</div>
									))}
								</div>
							</div>
						)}
					</InView>

					{/* diploma cloud */}
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
						{diploma.map((item) => (
							<div key={item.name}>
								<Image
									className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
									src={item.image}
									alt={item.name}
									width={200}
									height={100}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

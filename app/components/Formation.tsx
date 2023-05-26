import Image from "next/image";

export default function Formation() {
	return (
		<div
			className="relative isolate overflow-hidden bg-darkGrayCust pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8 text-white"
			id="formation"
		>
			<Image
				src="/images/lynda-fit-formation-2002X1907.jpeg"
				alt="Lynda votre coach fitness à la réunion"
				width={2002}
				height={1907}
				className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-soft-light"
			/>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						Ma Formation
					</h2>
					<p className="mt-6 text-lg leading-8">
						Coach sportive depuis 2003, je suis titulaire du Brevet d’Etat
						d’Educateur Sportif Métiers de la Forme, mais aussi formée Les Mills
						(Body Pump, Body Balance, Body Combat, Body Attack), FFGYM,
						Instructeur de Zumba, FISAF, Pilates (petit matériel, femme enceinte
						et sénior, swiss ball, Matwork 1 et 2), et Yogalates.
					</p>
				</div>

				{/* training cloud */}
				
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
						<div className="grid grid-cols-2 items-center bg-white/10 p-8 sm:p-10">
							<Image
								className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 border"
								src="/images/icons8-pilates-60.png"
								alt="Transistor"
								width={60}
								height={60}
							/>
							<p className="text-2xl font-bold tracking-tight border">PILATES</p>
						</div>
						<div className="bg-white/5 p-6 sm:p-10">
							<img
								className="max-h-12 w-full object-contain"
								src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
								alt="Reform"
								width={158}
								height={48}
							/>
						</div>
						<div className="bg-white/5 p-6 sm:p-10">
							<img
								className="max-h-12 w-full object-contain"
								src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
								alt="Tuple"
								width={158}
								height={48}
							/>
						</div>
						<div className="bg-white/5 p-6 sm:p-10">
							<img
								className="max-h-12 w-full object-contain"
								src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
								alt="Laravel"
								width={158}
								height={48}
							/>
						</div>
						<div className="bg-white/5 p-6 sm:p-10">
							<img
								className="max-h-12 w-full object-contain"
								src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
								alt="SavvyCal"
								width={158}
								height={48}
							/>
						</div>
						<div className="bg-white/5 p-6 sm:p-10">
							<img
								className="max-h-12 w-full object-contain"
								src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
								alt="Statamic"
								width={158}
								height={48}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

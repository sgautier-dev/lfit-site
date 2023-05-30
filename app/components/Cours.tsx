import Image from "next/image";

export default function Cours() {
	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="formation"
		>
			<Image
				src="/images/mesCours-lyndaFit-1824X1368.jpeg"
				alt="Lynda votre coach fitness à la réunion"
				width={1824}
				height={1368}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						Mes Cours
					</h2>
					<p className="mt-6 text-lg">
						Les cours se déroulent sur la plage de l’hermitage, île de la
						réunion, en petit groupe.
					</p>
				</div>

				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<div className="px-6">
						<h3 className="text-xl font-bold tracking-tight">
							Pour être en forme longtemps chaque jour prendre un peu de temps
							pour soi
						</h3>
						<p className="mt-2 text-lg">
							Pour une reprise ou une découverte, accordez vous ce moment pour
							prendre le temps pour soi, pour son corps, les bienfaits de ces
							moments réguliers se retrouveront dans votre quotidien.
						</p>
						<button
							type="button"
							className="mt-4 rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust/80"
						>
							Me Contacter
						</button>
					</div>
					<Image
						src="/images/nate-johnston-2gBpsNuHcyA-unsplash-1920X2880.jpg"
						alt="Lynda votre coach fitness à la réunion"
						width={300}
						height={500}
						className="mt-6 aspect-auto object-cover justify-self-center rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
}

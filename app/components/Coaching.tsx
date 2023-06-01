import Image from "next/image";

export default function Coaching() {
	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="coaching"
		>
			<Image
				src="/images/coaching_lyndafit-2400X1803.jpg"
				alt="Lynda votre coach fitness à la réunion"
				width={2400}
				height={1803}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						Le Coaching
					</h2>
					<p className="mt-6 text-lg">
						Je suis votre COACH PERSONNEL à domicile ou en extérieur seule,
						entre amis ou en famille.
					</p>
				</div>

				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
                <Image
						src="/images/tyler-nix-Y1drF0Y3Oe0-unsplash-1920X2880.jpg"
						alt="Lynda votre coach fitness à la réunion"
						width={200}
						height={500}
						className="mr-6 lg:mr-0 aspect-auto object-cover lg:justify-self-end rounded-xl lg:order-2"
					/>
					<div className="px-6 mt-6 lg:mt-0">
						<h3 className="text-xl font-bold tracking-tight">
							Investir sur soi même c’est le placement le plus rentable à long
							terme
						</h3>
						<p className="mt-2 text-lg">
							Dans un cadre privé, vous bénéficiez de toute l’attention dont
							vous avez besoin en fonction de votre planning. Le coaching
							représente la solution pour démarrer ou reprendre sa santé et son
							corps en main Pourquoi avoir un coach : - Avoir des séances sur
							mesure et donc plus efficaces - Etre motivé chaque semaine par sa
							coach et sortir de sa zone de confort - Vous amenez là où vous
							n’êtes pas capable d’aller seul
						</p>
						<button
							type="button"
							className="mt-4 rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust/80"
						>
							Me Contacter
						</button>
					</div>
					
				</div>
			</div>
		</div>
	);
}

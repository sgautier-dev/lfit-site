import Image from "next/image";

export default function Toning() {
	return (
		<div className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8">
			<Image
				src="/images/jonathan-borba-lrQPTQs7nQQ-unsplash-2400X1600.jpg"
				alt="Lynda votre coach fitness à la réunion"
				width={2400}
				height={1600}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						Se tonifier
					</h2>
					<p className="mt-6 text-lg">
						Pour une silhouette plus ferme et un corps plus solide.
					</p>
				</div>

				{/* training cloud */}

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2 lg:grid-cols-3">
						<div className="bg-grayCust/40 p-6 sm:p-10">
							<div className="grid grid-cols-2 items-center ">
								<Image
									className="max-h-12 w-full object-contain"
									src="/images/icons8-pushups-60.png"
									alt="Total Silhouette lynda fit"
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">
									Total Silhouette
								</p>
							</div>
							<p className="mt-2">
								Cours de renforcement musculaire visant la tonification des
								cuisses, de la taille, des abdos et des fessiers.
							</p>
						</div>
						<div className="bg-grayCust/40 p-6 sm:p-10">
							<div className="grid grid-cols-2 items-center ">
								<Image
									className="max-h-12 w-full object-contain"
									src="/images/icons8-pilates-60.png"
									alt="pilates lynda fit"
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">Pilates</p>
							</div>
							<p className="mt-2">
								Le Pilates renforce et étire les muscles, soulageant ainsi les
								douleurs. Il affine la silhouette, améliore le souffle et aide à
								lutter contre le stress. De plus, son approche posturale vous
								aide à mieux vous tenir, agissant ainsi sur le corps et
								l&apos;esprit.
							</p>
						</div>
						<div className="bg-grayCust/40 p-6 sm:p-10">
							<div className="grid grid-cols-2 items-center ">
								<Image
									className="max-h-12 w-full object-contain"
									src="/images/icons8-sit-ups-60.png"
									alt="Abdos Fessiers lynda fit"
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">
									Spécial Abdos Fessiers
								</p>
							</div>
							<p className="mt-2">
								Cours de renforcement musculaire visant la tonification des
								abdos et des fessiers.
							</p>
						</div>
						<div className="bg-grayCust/40 p-6 sm:p-10">
							<div className="grid grid-cols-2 items-center ">
								<Image
									className="max-h-12 w-full object-contain"
									src="/images/icons8-yoga-60.png"
									alt="yogalates lynda fit"
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">Yogalates</p>
							</div>
							<p className="mt-2">
								A mi-chemin entre yoga et Pilates, le Yogalates vous apporte
								souplesse, stabilité et force. Il renforce les muscles profonds,
								atténue les douleurs et améliore la posture pour un maintien
								optimal. Un corps gainé et allongé, une tranquillité
								d&apos;esprit : la clé du lâcher prise.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

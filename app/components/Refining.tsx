import Image from "next/image";

export default function Refining() {
	return (
		<div className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8">
			<Image
				src="/images/bruce-mars-HHXdPG_eTIQ-unsplash-2400X1655.jpg"
				alt="Lynda votre coach fitness à la réunion"
				width={2400}
				height={1655}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						S’affiner
					</h2>
					<p className="mt-6 text-lg">
						Pour une silhouette plus harmonieuse, l’entrainement mixant le
						cardio et le renforcement vous permettront d’observer de rapides
						changements physiques.
					</p>
				</div>

				{/* training cloud */}

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2 lg:grid-cols-3">
						<div className="bg-grayCust/40 p-6 sm:p-10">
							<div className="grid grid-cols-2 items-center ">
								<Image
									className="max-h-12 w-full object-contain"
									src="/images/icons8-girl-running-60.png"
									alt="pilates lynda fit"
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">
									Circuit Training
								</p>
							</div>
							<p className="mt-2">
								Séance collective dynamique où chaque participant travaille à sa
								propre intensité et à son propre rythme, sur des ateliers cardio
								et de renforcement visant un affinement et une tonification du
								corps.
							</p>
						</div>
						<div className="bg-grayCust/40 p-6 sm:p-10">
							<div className="grid grid-cols-2 items-center ">
								<Image
									className="max-h-12 w-full object-contain"
									src="/images/icons8-fitnessBis-60.png"
									alt="yogalates lynda fit"
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">HIIT</p>
							</div>
							<p className="mt-2">
								Une séance courte et intense. A exercer à votre rythme pour
								redessiner votre silhouette, effacer les petites rondeur.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

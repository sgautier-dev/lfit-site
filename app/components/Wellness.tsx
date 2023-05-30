import Image from "next/image";

export default function Wellness() {
	return (
		<div className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8">
			<Image
				src="/images/avrielle-suleiman-u0sviAL9pJM-unsplash-3000X2000.jpg"
				alt="Lynda votre coach fitness à la réunion"
				width={3000}
				height={2000}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
						Bien-être
					</h2>
					<p className="mt-6 text-lg">
						Votre santé doit être votre priorité, prenez soin de votre corps et
						de votre esprit.
					</p>
				</div>

				{/* training cloud */}

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2 lg:grid-cols-3">
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
								Agit à la fois sur le corps et l&apos;esprit{" "}
							</p>
							<ul>
								<li>
									- Il diminue les douleurs grâce au renforcement musculaire en
									profondeur.
								</li>
							</ul>
							<ul>
								<li>
									- Il tonifie, affine et assouplit en étirant et raffermissant
									les muscles.
								</li>
							</ul>
							<ul>
								<li>
									- Il améliore le souffle grâce au travail sur la respiration.
									- Il détend et aide à lutter contre le stress physique et
									mental.
								</li>
							</ul>
							<ul>
								<li>
									- Il vous aide à vous redresser grâce au travail postural pour
									apprend à mieux se tenir.
								</li>
							</ul>
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
								Un esprit zen dans un corps tonique. Séance de gym douce à mi
								chemin entre le yoga et le Pilates. Permet de gagner en
								souplesse, stabilité, et force. les muscles profonds sont
								renforcés, certaines douleurs sont atténuées, la posture est
								améliorée avec un meilleur maintient, un corps plus gainé et
								plus allongé. Ce cours favorise le lâcher prise et le calme
								mental.
							</p>
						</div>
						<div className="bg-grayCust/40 p-6 sm:p-10">
							<div className="grid grid-cols-2 items-center ">
								<Image
									className="max-h-12 w-full object-contain"
									src="/images/icons8-stratching-60.png"
									alt="streching lynda fit"
									width={60}
									height={60}
								/>
								<p className="text-2xl font-bold tracking-tight">Stretching</p>
							</div>
							<p className="mt-2">
								Permet d&apos;améliorer la souplesse du corps, diminue les
								problèmes de dos et dénoue les muscles et les crispations du
								corps.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

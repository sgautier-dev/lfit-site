import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative xl:mx-auto xl:max-w-7xl xl:px-8 ">
				<h1 className="absolute inset-x-0 top-0 text-center text-9xl font-caramel pt-10  text-pinkCust">
					<span className="font-vibes p-2 bg-gradient-to-r from-pinkCust to-amber-300 bg-clip-text text-transparent text-[150px]">
						L.
					</span>{" "}
					FIT
				</h1>
				<div className="grid lg:grid-cols-2 items-start pt-32 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<Image
						src="/images/LiliSushi04_WhiteBorder-500X718.jpg"
						alt="Lynda votre coach fitness à la réunion"
						width={400}
						height={500}
						className="aspect-auto object-cover px-6"
					/>
					<div className="bg-white/80 rounded-xl p-6">
						<h2 className="text-center text-xl font-bold tracking-tight">
							Renouer avec son corps
						</h2>
						<p className="mt-2">
							Je suis Lynda, ancienne mannequin et coach sportive
							certifiée, passionnée par le fitness depuis mon adolescence.
							Formée à Paris, je me suis perfectionnée dans diverses disciplines
							dont les cours Les Mills et le Pilates. Depuis La Réunion,
							j&apos;utilise mon expérience pour offrir des séances adaptées à
							tous, des novices aux athlètes de haut niveau. Mon objectif ? Vous
							aider à découvrir votre potentiel, à vous sentir bien dans votre
							corps et à relever de nouveaux défis sportifs. Ensemble,
							découvrons les merveilles du sport et du bien-être corporel.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center mt-4 rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust/80"
						
						>
							Me Contacter
						</a>
					</div>
				</div>

				<Image
					src="/images/sean-oulashin-KMn4VEeEPR8-unsplash-2400X1595.jpg"
					alt="votre coach fitness sur la plage, ermitage la réunion"
					width={2400}
					height={1595}
					className="absolute inset-0 -z-10 aspect-[16/9] xl:aspect-[9/4] w-full object-cover"
				/>
			</div>
  )
}
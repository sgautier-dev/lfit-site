import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
	return (
		<main className="relative mx-auto min-h-screen font-judson xl:mx-auto xl:max-w-7xl xl:px-8">
			<Image
				src="/images/felipe-correia-ScQngs6oO1E-unsplash-1920X1280.jpg"
				alt="Lynda votre coach fitness à la réunion"
				width={1920}
				height={1280}
				sizes="(min-width: 1360px) 1280px, calc(94.23vw + 17px)"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>
			<div className="isolate mx-auto max-w-7xl py-6 px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
						Espace membres
					</h2>
					<p className="mt-6 text-lg">
						Connectez-vous pour retrouver vos vidéos d&apos;entraînement
						préférées dans l&apos;Espace Membres de LFIT. Des séances variées
						vous attendent, pour tous les niveaux.<br /> Bon entrainement !
					</p>
				</div>
				<div className="flex justify-center">
					<SignIn
						appearance={{
							elements: {
								formButtonPrimary: "bg-pinkCust hover:bg-darkGrayCust text-sm",
								footerActionLink: "text-pinkCust hover:text-darkGrayCust",
							},
						}}
					/>
				</div>
			</div>
		</main>
	);
}

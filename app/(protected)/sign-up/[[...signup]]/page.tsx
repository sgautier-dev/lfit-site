import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import membersBackPic from "@/public/images/felipe-correia-ScQngs6oO1E-unsplash-1920X1280.jpg";

export default function Page() {
	return (
		<main className="relative mx-auto min-h-screen font-judson xl:mx-auto xl:max-w-7xl xl:px-8">
			<Image
				src={membersBackPic}
				placeholder="blur"
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
						Rejoignez l&apos;espace membres LFIT et accédez à des vidéos de
						fitness exclusives. Stretching, Pilates, Cardio et plus encore.
						Inscrivez-vous maintenant et commencez votre aventure sportive !
					</p>
				</div>
				<div className="flex justify-center">
					<SignUp
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

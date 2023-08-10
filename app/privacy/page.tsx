import Link from "next/link";

export const metadata = {
	title: "Confidentialité",
};

export default function Privacy() {
	return (
		<main className="px-6 lg:px-8 py-20 sm:py-24 mx-auto max-w-7xl min-h-screen">
			<article className="container mx-auto">
				<h1 className="text-3xl font-bold mb-4 text-pinkCust">
					Politique de confidentialité
				</h1>
				<p className="mb-4">
					Nous attachons une grande importance à la protection de vos données
					personnelles. Cette politique de confidentialité décrit les
					informations que nous collectons et comment nous les utilisons.
				</p>
				<h2 className="text-xl font-bold mb-2">
					Collecte de données personnelles
				</h2>
				<div className="mb-4">
					<p>Nous collectons les informations suivantes:</p>
					<ul className="list-inside list-disc">
						<li>Nom</li>
						<li>Adresse électronique</li>
					</ul>
					<p>
						Les informations personnelles que nous collectons sont recueillies
						au travers de formulaires et grâce à l&apos;interactivité établie
						entre vous et notre site Web.
					</p>
				</div>
				<h2 className="text-xl font-bold mb-2">
					Utilisation des données personnelles
				</h2>
				<div className="mb-4">
					<p>
						Les informations recueillies auprès de vous peuvent être utilisées
						pour :
					</p>
					<ul className="list-inside list-disc">
						<li>Répondre à vos demandes d&apos;informations</li>
						<li>Gérer l&apos;accès à certaines sections du site</li>
						<li>
							Effectuer des transactions commerciales (Stripe pour les
							paiements)
						</li>
					</ul>
				</div>
				<h2 className="text-xl font-bold mb-2">
					Partage de données personnelles
				</h2>
				<div className="mb-4">
					<p>
						Nous nous engageons à ne pas commercialiser les informations
						personnelles collectées. Toutefois, nous pouvons partager ces
						informations avec des tiers pour les raisons suivantes :
					</p>
					<ul className="list-inside list-disc">
						<li>
							Transaction: Dans le cadre d&apos;une transaction commerciale
							(Stripe pour les paiements)
						</li>
						<li>
							Authentification: Pour authentifier votre accès au site (via
							Clerk)
						</li>
					</ul>
				</div>
				<h2 className="text-xl font-bold mb-2">Consentement</h2>
				<p className="mb-4">
					En utilisant notre site, vous consentez à notre politique de
					confidentialité.
				</p>
				<h2 className="text-xl font-bold mb-2">
					Droits d&apos;Accès, de Rectification et d&apos;Opposition
				</h2>
				<p className="mb-4">
					Vous pouvez accéder, modifier ou supprimer votre compte directement en
					utilisant le bouton utilisateur Clerk (situé en haut à droite dans la
					barre d&apos;en-tête). Cette fonction vous permet de contrôler vos données
					de manière autonome et rapide. Si vous avez des questions ou des
					préoccupations concernant vos données personnelles, vous pouvez nous
					contacter via le{" "}
					<Link href="/#contact" className="text-pinkCust hover:text-gray-700">
						formulaire de contact
					</Link>{" "}
					disponible sur notre site web.
				</p>
				<p className="mb-4">
					Ce site est protégé par reCAPTCHA{" "}
					<Link
						href="https://policies.google.com/privacy"
						target="_blank"
						className="text-pinkCust hover:text-gray-700"
					>
						les règles de confidentialité
					</Link>{" "}
					et{" "}
					<Link
						href="https://policies.google.com/terms"
						target="_blank"
						className="text-pinkCust hover:text-gray-700"
					>
						les conditions d&apos;utilisation
					</Link>{" "}
					de Google s&apos;appliquent.
				</p>
			</article>
		</main>
	);
}

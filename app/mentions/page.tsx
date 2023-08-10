export const metadata = {
	title: "Mentions légales",
};

export default function Legal() {
	return (
		<main className="px-6 lg:px-8 py-20 sm:py-24 mx-auto max-w-7xl min-h-screen">
			<article className="container mx-auto">
				<h1 className="text-3xl font-bold mb-4 text-pinkCust">
					Mentions légales
				</h1>
				<p className="mb-4">
					L.FIT respecte et se conforme à toutes les obligations légales
					requises pour la mise en ligne d&apos;un site internet. Sur cette
					page, vous trouverez toutes les informations légales concernant notre
					entreprise et l&apos;utilisation de notre site web.
				</p>
				<p className="mb-4">
					Le numéro SIRET de l&apos;entreprise L.FIT est 79074004700010.
				</p>
				<p className="mb-4">
					Le représentant légal d&apos;L.FIT est Lynda Soubirou.
				</p>
				<p className="mb-4">
					Le site web d&apos;L.FIT est hébergé par Vercel Inc., dont le siège
					social est situé 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
				</p>
				<p className="mb-4">
					Les images utilisées sur ce site web sont fournies par Unsplash. Selon
					la licence Unsplash, ces images peuvent être utilisées gratuitement à
					des fins commerciales et non commerciales sans avoir à donner crédit.
				</p>
			</article>
		</main>
	);
}

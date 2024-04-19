import Link from "next/link";

export const metadata = {
	title: "Conditions générales de vente",
};

export default function CGV() {
	return (
		<main className="px-6 lg:px-8 py-20 sm:py-24 mx-auto max-w-7xl min-h-screen">
			<article className="container mx-auto">
				<h1 className="text-3xl font-bold mb-4 text-pinkCust">
					Conditions générales de vente
				</h1>
				<p className="mb-4">Date de dernière mise à jour : 3 septembre 2023</p>
				<h2 className="text-xl font-bold mb-2">
					Article 1. Prérequis à la passation d’une commande
				</h2>
				<p className="mb-4">
					La commande d’un Produit sur le Site est réservée aux personnes
					physiques qui se sont préalablement créé un compte valide sur le Site,
					âgées au minimum de 18 ans, en capacité de contracter et agissant à
					des fins n’entrant pas dans le cadre de leur activité commerciale,
					industrielle, artisanale ou libérale (ci-après, le « Client »). Le
					Client garantit qu’il remplit sincèrement les informations qui lui
					sont demandées lors de son inscription. Avant toute utilisation du
					Site, le Client doit s’assurer qu’il dispose des moyens techniques et
					informatiques lui permettant d’utiliser le Site, de commander les
					Produits et que son navigateur permet un accès sécurisé au Site. Lors
					de sa première commande, le Client doit créer un compte client et
					renseigner les informations obligatoires sur le formulaire dédié à cet
					effet. Le Client s’engage expressément à ne pas utiliser de fausses
					informations ou des informations de tiers. Après sa première commande
					et à l’occasion de commandes ultérieures, le Client pourra accéder à
					son compte en saisissant son identifiant et son mot de passe. Le
					Client est seul responsable du maintien de la confidentialité de ses
					identifiants et mot de passe permettant d’accéder à son compte client
					et doit prendre toutes les mesures nécessaires pour s’assurer que ces
					éléments restent confidentiels et sécurisés.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 2. Commandes</h2>
				<p className="mb-4">
					Le Client sélectionne les Produit(s) qu’il souhaite acheter.. Le
					Client a la possibilité de modifier sa commande et de corriger
					d’éventuelles erreurs avant de la valider définitivement. La réception
					du paiement définitif de la commande par la Société après confirmation
					du récapitulatif de commande par le Client conclut le contrat de vente
					entre le Client et la Société Lynda Soubirou, le contrat ne peut être
					remis en cause que dans les limites prévues dans les CGV. Toute
					commande effectuée implique une acceptation sans réserve des CGV par
					le Client. La confirmation de la commande validée par le Client lui
					sera adressée par email. Selon le mode de paiement utilisé, l’envoi de
					la confirmation de commande pourra être différé jusqu’à la réception
					définitive du paiement par la Société. A cet effet, le Client accepte
					formellement l’usage du courrier électronique pour la confirmation par
					la Société Lynda Soubirou du contenu de sa commande. La société Lynda
					Soubirou se réserve le droit de refuser les commandes émanant d’un
					Client avec lequel existerait un litige ou un incident relatif au
					paiement d’une commande antérieure dans les conditions détaillées à
					l’article 4.2 ci-dessous.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 3. Prix</h2>
				<p className="mb-4">
					Les prix des Produits sur le Site sont indiqués en euros toutes taxes
					comprises. Tout changement du taux de TVA pourra être répercuté sur le
					prix des produits. Le montant total toutes taxes comprises et frais de
					port inclus est indiqué dans le récapitulatif de la commande, avant
					que le Client ne valide définitivement sa commande. La Société Lynda
					Soubirou se réserve le droit de modifier ses prix à tout moment mais
					les Produits seront facturés au Client sur la base des tarifs en
					vigueur au jour de la commande.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 4. Paiement</h2>
				<h3 className="text-lg font-semibold mb-2">4.1 Modes de paiement</h3>
				<p className="mb-4">
					Le règlement des commandes s’effectue via la carte bancaire : le débit
					de la carte est effectué comptant le jour de la commande. Le Site
					utilise des systèmes de paiement sécurisés afin de garantir au Client
					la totale confidentialité de ses informations bancaires. Les
					coordonnées bancaires du Client ne sont pas stockées informatiquement
					par la Société.
				</p>
				<h3 className="text-lg font-semibold mb-2">
					4.2 Incidents de paiement
				</h3>
				<p className="mb-4">
					Les Produits demeurent la propriété de la Société jusqu’à leur complet
					paiement par le Client. En l’absence de paiement au bout de 30 jours
					après des relances de la Société, la Société informe le Client du
					risque d’inscription de ses données sur un fichier d’exclusion
					concernant les commandes. Dès que le Client régularise son paiement,
					toutes ses données sont effacées du fichier d’exclusion dans les 48h
					de la notification du paiement à la Société. Seules les personnes
					chargées d’assurer le recouvrement des impayés et le personnel chargé
					du service client ont accès au fichier d’exclusion des Clients
					défaillants. En tout état de cause, la Société se réserve le droit de
					suspendre ou d’annuler toute exécution de commande et/ou la livraison
					des Produits commandés par le Client en cas de paiement incomplet,
					irrégulier ou inexistant, en cas de fraude, de tentative de fraude
					relative à l’utilisation du Site et au paiement d’une commande ou
					violation des CGV.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 5. Livraison</h2>
				<p className="mb-4">
					Les délais de traitement et de livraison indiqués au Client
					s’entendent en jours ouvrés. Les délais d’expédition correspondent aux
					délais moyens de traitement de la commande.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 6. Responsabilité</h2>
				<p className="mb-4">
					La responsabilité de la Société ne saurait être engagée pour
					l’inexécution ou la mauvaise exécution des CGV en cas de force
					majeure, de survenance d’un fait imputable au Client ou de tout
					inconvénient, dommage imprévisible et insurmontable inhérent à un
					tiers ou à l’utilisation du réseau Internet. La responsabilité de la
					Société ne peut pas non plus être engagée en cas de dommage indirect.
					En particulier, la Société ne peut garantir une bonne exécution de la
					livraison si les informations communiquées par le Client sont
					incomplètes ou erronées. Dans un tel cas, la livraison pourra être
					retardée sans que la responsabilité de la Société ne puisse être mise
					en cause. Dans le cas où des liens vers des sites tiers non édités ni
					contrôlés par la Société sont insérés sur le Site, la Société ne
					saurait être tenue responsable du fonctionnement ou du contenu de ces
					sites tiers. La Société s’efforce, dans la mesure du possible, de
					maintenir le Site accessible 7 jours sur 7 et 24 heures sur 24.
					Néanmoins, l&apos;utilisation du Site peut être temporairement
					suspendue, en raison d’opérations techniques de maintenance, de
					migration ou de mises à jour, en raison de pannes ou de contraintes
					liées au fonctionnement d’Internet.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 7. Rétractation</h2>
				<p className="mb-4">
					<span className="font-semibold">
						Annulation de la commande par le Client :{" "}
					</span>
					Aucune modification ou annulation de la commande pour quelque raison
					que ce soit ne sera acceptée après que la commande ait été confirmée,
					sans préjudice pour le Client d’exercer son droit de rétractation dans
					les conditions définies aux présentes.
				</p>
				<p className="mb-4">
					<span className="font-semibold">Commande de Services : </span>
					les Services commercialisés sur le Site constituent des contenus
					numériques indépendants de tout support matériel et à utilisation
					instantanée. Ainsi, conformément aux dispositions de l’article L.
					221-28 du Code de la consommation, le Client reconnait et accepte
					expressément que l’exécution de la prestation commence dès la
					validation du paiement et renonce expressément à son droit de
					rétractation.
				</p>
				<h2 className="text-xl font-bold mb-2">
					Article 8. Propriété Intellectuelle et Industrielle
				</h2>
				<p className="mb-4">
					Toutes les illustrations, logos, images, caractères, modes de
					présentation, graphisme du Site sont et demeurent la propriété
					exclusive de la Société Lynda Soubirou ou des titulaires des dits
					droits ayant accordé un droit d’exploitation à la Société. Toute
					reproduction, représentation, extraction ou utilisation des dits
					droits par un Client sera constitutif d’une faute donnant lieu à des
					poursuites judiciaires.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 9. Garanties</h2>
				<p className="mb-4">
					La société Lynda Soubirou n’a qu’une obligation de moyen pour toutes
					les étapes d’accès au Site, au processus de commande et de Livraison.
					Sa responsabilité est expressément exclue, ce que reconnait le Client,
					pour tout inconvénient ou dommage inhérent à l’utilisation du réseau
					Internet. La responsabilité de la société Lynda Soubirou est
					expressément exclue, ce que reconnaît le Client, en cas (i) d’usage
					impropre du Produit ou du Service par le Client ou de non-respect des
					préconisations d’usage, (ii) d’absence de résultat (perte de poids ou
					changement physique effectif) à l’issue de l’utilisation des Produits
					ou Services et (iii) de dommages indirects, consécutifs ou immatériels
					subis par le Client. En tout état de cause, la responsabilité est
					plafonnée, pour les dommages directs, quel que soit son fondement, au
					prix du Produit ou des Services en cause auquel s’ajoutent les frais
					occasionnés par sa vente.
				</p>
				<h2 className="text-xl font-bold mb-2">
					Article 10. PROPRIETE INTELLECTUELLE
				</h2>
				<p className="mb-4">
					Les marques, logos, documents, études, noms de domaines, images,
					vidéos, textes, savoir-faire et plus généralement tout autre
					information objet de droits de propriété intellectuelle en lien avec
					les Produits et Services sont et restent la propriété exclusive de la
					société Lynda Soubirou. Aucune cession de droits de propriété
					intellectuelle n’est réalisée au travers des présentes CG. Le Client
					reconnait et accepte en particulier que les Produits et Services font
					l’objet de droits de propriété intellectuelle. Le Client ne peut faire
					état ou usage des marques, logos, documents, supports des programmes,
					méthodologies, études, noms de domaines, images, vidéos, textes,
					savoir-faire et de tout autre droit de propriété intellectuelle
					appartenant à la société Lynda Soubirou qu’avec l’autorisation
					expresse, écrite et préalable de la société Lynda Soubirou. A cet
					égard, la société Lynda Soubirou se réserve le droit de s’opposer,
					faire cesser et solliciter réparation de toute utilisation de ses
					droits de propriété intellectuelle qu’elle considérerait comme étant
					contrefaisante, déloyale, constitutive d’actes de parasitisme ou
					contraire à son image ou à des droits qu’elle aurait concédés. Le
					Client reconnaît et accepte que la violation des droits de propriété
					intellectuelle de la société Lynda Soubirou et notamment la
					commercialisation de ses méthodologies auprès de tiers donnera lieu,
					de plein droit, au paiement d’une pénalité de cinquante mille euros
					(50.000 €), sans préjudice de tous autres dommages et intérêts que la
					société Lynda Soubirou pourra réclamer en justice dans l’hypothèse où
					son préjudice subi serait supérieur à cette pénalité.
				</p>
				<h2 className="text-xl font-bold mb-2">Article 11. Sécurité</h2>
                <p className="mb-4">
				<Link
					href={"/privacy"}
					className="text-pinkCust hover:text-gray-700"
				>
					Cliquez pour voir notre politique de confidentialité
				</Link>
                </p>
				<h2 className="text-xl font-bold mb-2">Article 12. Newsletter</h2>
				<p className="mb-4">
					Sauf opposition du Client, la Société est susceptible de lui adresser
					une newsletter et des alertes personnalisées sous forme notamment
					d’e-mails ou de SMS. Si le Client ne souhaite plus recevoir de
					messages promotionnels, il peut se désabonner à tout moment depuis son
					Compte ou en cliquant sur le lien de désinscription présent dans
					chaque message promotionnel.
				</p>
				<h2 className="text-xl font-bold mb-2">
					Article 13. Modifications des CGV
				</h2>
				<p className="mb-4">
					La société Lynda Soubirou se réserve le droit de changer ces
					conditions à tout moment, sans préavis. La version des CGV applicables
					à la transaction passée par un Client sont celles figurant sur le Site
					au moment de la commande et que le Client aura acceptées au moment de
					valider sa commande. La version des CGV applicable à la commande est
					envoyée par email au Client en même temps que la confirmation de la
					commande ou au moment de la réception du paiement en cas de paiement
					par chèque ou virement bancaire.
				</p>
				<h2 className="text-xl font-bold mb-2">
					Article 14. CONVENTION DE PREUVE
				</h2>
				<p className="mb-4">
					Les Clients comprennent et acceptent que toutes les informations,
					contenus, fichiers, documents, et tout élément échangé de manière
					électronique via le Site avec la Société constituent des preuves
					valides, recevables, fiables, opposables, et ayant la force probante
					d’un acte sous seing privé, sauf preuve contraire. Les Clients
					s’engagent à ne pas contester la recevabilité, la validité,
					l’opposabilité, la fiabilité ou la force probante de ces éléments.
				</p>
				<h2 className="text-xl font-bold mb-2">
					Article 14. Droit applicable – Résolution des litiges
				</h2>
				<p className="mb-4">
					Le contrat formé par l’acceptation des présentes Conditions Générales
					de Vente lors de la commande est soumis à la loi française. La langue
					du présent contrat est la langue française. Si le litige persiste, le
					Client pourra contacter le service de règlement en ligne des litiges
					de la Commission européenne à l’adresse suivante :
					https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage.
					A défaut de règlement amiable et pour tout litige relatif aux
					présentes CGV Produits, et conformément aux dispositions de l’article
					R.631-3 du Code de la consommation, le Client peut saisir, soit
					l&apos;une des juridictions territorialement compétentes en vertu du
					code de procédure civile, soit la juridiction du lieu où il demeurait
					au moment de la conclusion du contrat ou de la survenance du fait
					dommageable.
				</p>
			</article>
		</main>
	);
}

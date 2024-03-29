import Image from "next/image";
import { BsArrowUpCircle } from "react-icons/bs";
import { legal } from "@/lib/navigation";
import logoRun from "@/public/images/logo_region.jpg"
import logoUE from "@/public/images/LogoUnionEuropeenne.jpg"

const social: SocialType[] = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/lynda.bret",
		icon: (props) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/lfit974/",
		icon: (props) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "YouTube",
		href: "https://youtube.com/@lareunion974lfit",
		icon: (props) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
];

export default function Footer() {
	const today = new Date();
	const year = today.getFullYear().toString();

	return (
		<footer className="z-10 bg-darkGrayCust text-white">
			<div className="mx-auto max-w-7xl px-6 py-6 md:grid md:grid-cols-5 md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-5">
					{social.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="hover:text-grayCust"
							target="_blank"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-3 md:mt-0 md:order-2">
					<ul className="space-y-3 text-center">
						{legal.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className="text-xs leading-5 hover:text-gray-300"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="mt-3 md:order-3">
					<a href="https://www.sgautier.dev/" target="_blank">
						<p translate="no" className="text-center text-xs leading-5">
							Designed by SG
						</p>
					</a>
				</div>
				<div className="mt-3 md:order-1">
					<p className="text-center text-xs leading-5">
						&copy; <span>{year}</span> L. FIT, Tous droits réservés.
					</p>
				</div>
				<div className="mt-3 grid gap-3 items-center md:order-4">
					<div className="flex items-center justify-center gap-3">
						<Image
							src={logoRun}
							placeholder="blur"
							alt="logo de la région réunion"
							width={127}
							height={60}
							className="aspect-auto object-cover"
						/>
						<Image
							src={logoUE}
							placeholder="blur"
							alt="logo union européenne"
							width={73}
							height={60}
							className="aspect-auto object-cover"
						/>
					</div>
					<p className="text-center text-[10px] ">
						Ce site a été financé avec l’aide du FEDER (REACT-UE), dans le cadre
						de la réponse de l’Union européenne à la pandémie COVID-19. L’Europe
						s’engage à La Réunion.
					</p>
				</div>
			</div>

			<a
				href="#"
				aria-label="back to top"
				className="fixed right-4 bottom-10 opacity-80 hover:opacity-40 text-darkGrayCust"
			>
				<BsArrowUpCircle size={35} />
			</a>
		</footer>
	);
}

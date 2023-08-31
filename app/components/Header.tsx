import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import {
	UserButton,
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
} from "@clerk/nextjs";
import MobileMenu from "./MobileMenu";

export default function Header() {
	return (
		<header className="sticky top-0 z-10 bg-darkGrayCust text-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link
						href="/"
						className="-m-1.5 p-1.5 font-exo font-black text-4xl text-pinkCust"
					>
						<span className="sr-only">Lynda FIT</span>
						<p>L. FIT</p>
					</Link>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-days leading-6 relative group"
						>
							{item.name}
							<span className="absolute inset-x-0 bottom-0 h-1 mt-1 transform scale-x-0 group-hover:scale-x-100 transition duration-200 ease-out origin-left bg-pinkCust"></span>
						</Link>
					))}
				</div>
				<div className="flex flex-1 items-center justify-end gap-x-6">
					<a
						href={`tel:+262692799392`}
						aria-label="Appelez Lynda Fit"
						className="hover:scale-125 hover:opacity-80 transition"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 text-pinkCust"
						>
							<path
								fillRule="evenodd"
								d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
								clipRule="evenodd"
							/>
						</svg>
					</a>

					<div className="text-pinkCust">
						<SignedIn>
							<div className="flex gap-3 items-center">
								<Link
									href="/members"
									className="hover:scale-125 hover:opacity-80 transition"
								>
									<VideoCameraIcon className="h-8 w-8" aria-hidden="true" />
								</Link>
								{/* Mount the UserButton component */}
								<UserButton afterSignOutUrl="/" />
							</div>
						</SignedIn>

						<SignedOut>
							{/* Signed out users get sign in button */}
							<div className="flex gap-3  items-center">
								<SignInButton mode="redirect">
									<button className="hover:scale-125 hover:opacity-80 transition">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-6 h-6 text-pinkCust"
										>
											<path
												fillRule="evenodd"
												d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</SignInButton>
								<SignUpButton mode="redirect">
									<button className="hidden sm:block rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust">
										S&apos;inscrire
									</button>
								</SignUpButton>
							</div>
						</SignedOut>
					</div>

					{/* <a
						href="#"
						className="rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust"
					>
						S&apos;inscrire
					</a> */}
				</div>
				<MobileMenu />
			</nav>
		</header>
	);
}

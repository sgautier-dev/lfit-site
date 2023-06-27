import Image from "next/image";

export default function Contact() {
	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="contact"
		>
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative overflow-hidden bg-gradient-to-r from-darkGrayCust to-pinkCust px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
					<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
						<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl">
							Contactez moi
						</h2>
						<p className="mt-6 text-lg text-white">
							N&apos;hésitez pas à me rejoindre dans cet espace santé, sport et
							bien être au quotidien.
						</p>
					</div>
					<div className="grid lg:grid-cols-2">
						<Image
							src="/images/contact_lyndafit-1824X1368.jpeg"
							alt="Lynda votre coach fitness à la réunion"
							width={330}
							height={250}
							className="mt-10 aspect-auto object-cover justify-self-center self-center lg:justify-self-end rounded-xl lg:order-2"
						/>
						<form className="mx-auto mt-10 flex max-w-md gap-x-4 lg:order-1">
							<div className="grid grid-cols-2 gap-x-8 gap-y-6">
								<div>
									<label
										htmlFor="first-name"
										className="block text-sm font-semibold leading-6 text-white"
									>
										Prénom
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pinkCust sm:text-sm sm:leading-6"
											required
											placeholder="Saisissez votre prénom"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="last-name"
										className="block text-sm font-semibold leading-6 text-white"
									>
										Nom
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pinkCust sm:text-sm sm:leading-6"
											required
											placeholder="Saisissez votre nom"
										/>
									</div>
								</div>
								<div className="col-span-2">
									<label
										htmlFor="email"
										className="block text-sm font-semibold leading-6 text-white"
									>
										E-mail
									</label>
									<div className="mt-2.5">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pinkCust sm:text-sm sm:leading-6"
											required
											placeholder="Saisissez votre email"
										/>
									</div>
								</div>

								<div className="col-span-2">
									<div className="flex justify-between text-sm leading-6">
										<label
											htmlFor="message"
											className="block text-sm font-semibold leading-6 text-white"
										>
											Message
										</label>
										<p id="message-description" className="text-gray-400">
											Max 500 caractères
										</p>
									</div>
									<div className="mt-2.5">
										<textarea
											id="message"
											name="message"
											rows={4}
											aria-describedby="message-description"
											className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pinkCust sm:text-sm sm:leading-6"
											required
											placeholder="Saisissez votre message"
										/>
									</div>
								</div>
								<button
									type="submit"
									className="flex-none rounded-md bg-pinkCust px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust"
								>
									Envoyer
								</button>
							</div>
						</form>
					</div>
					<svg
						viewBox="0 0 1024 1024"
						className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
						aria-hidden="true"
					>
						<circle
							cx={512}
							cy={512}
							r={512}
							fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
							fillOpacity="0.7"
						/>
						<defs>
							<radialGradient
								id="759c1415-0410-454c-8f7c-9a820de03641"
								cx={0}
								cy={0}
								r={1}
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(512 512) rotate(90) scale(512)"
							>
								<stop stopColor="#7775D6" />
								<stop offset={1} stopColor="#E935C1" stopOpacity={0} />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}

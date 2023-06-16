"use client";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import getCours from "@/sanity/lib/getCours";
import { PortableText } from "@portabletext/react";

export default async function Cours() {
	const cours = await getCours();
	return (
		<div
			className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 mt-32 sm:mt-56 xl:mx-auto xl:max-w-7xl xl:px-8"
			id="cours"
		>
			<Image
				src={cours.backgroundImage}
				alt="Lynda votre coach fitness à la réunion"
				width={1824}
				height={1368}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-white opacity-80"></div>

			<div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<h2 className="text-4xl font-days tracking-tight text-pinkCust sm:text-5xl lg:text-6xl capitalize">
						{cours.mainTitle}
					</h2>
					<p className="mt-6 text-lg">{cours.presentation}</p>
				</div>

				<div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-x-8">
					<div className="px-6">
						<h3 className="text-xl font-bold tracking-tight">{cours.title}</h3>
						<div className="mt-2 text-lg">
							<PortableText value={cours.text} />
						</div>
						<a
							href="#contact"
							className="inline-flex items-center mt-4 rounded-md bg-pinkCust px-3 py-2 text-sm font-days text-white shadow-sm hover:bg-pinkCust/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pinkCust/80"
						>
							Me Contacter
						</a>
					</div>
					<InView threshold={0.5} triggerOnce>
						{({ inView, ref }) => (
							<Image
								ref={ref}
								src={cours.secondaryImage}
								alt="Lynda votre coach fitness à la réunion"
								width={200}
								height={500}
								className={`mr-6 lg:mr-0 mt-6 aspect-auto object-cover justify-self-end rounded-xl ${
									inView ? "animate-slide" : "invisible"
								}`}
							/>
						)}
					</InView>
				</div>
			</div>
		</div>
	);
}

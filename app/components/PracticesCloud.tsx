"use client";
import { InView } from "react-intersection-observer";
import Image from "next/image";

interface PracticesProps {
	practices: Practice[];
}

const PracticesCloud: React.FC<PracticesProps> = ({ practices }) => {
	return (
		<InView threshold={0.2} triggerOnce>
			{({ inView, ref }) => (
				<div ref={ref}>
					<div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2 lg:grid-cols-3">
						{practices.map((practice) => (
							<div
								key={practice._id}
								className={`bg-grayCust/40 p-6 sm:p-10 ${
									inView ? "animate-scale" : "opacity-0 scale-20"
								}`}
							>
								<div className="grid grid-cols-2 items-center">
									<Image
										className="max-h-12 w-full object-contain"
										src={practice.icon.value}
										alt={`${practice.icon.title} lynda fit`}
										width={60}
										height={60}
									/>
									<p className="text-2xl font-bold tracking-tight">
										{practice.name}
									</p>
								</div>
								<p className="mt-2">{practice.description}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</InView>
	);
};

export default PracticesCloud;

import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<main className="relative min-h-screen mx-auto font-judson xl:mx-auto xl:max-w-7xl xl:px-8">
			<div className="flex justify-center py-16 sm:py-20">
				<SignIn
					appearance={{
						elements: {
							formButtonPrimary: "bg-pinkCust hover:bg-darkGrayCust text-sm",
							footerActionLink: "text-pinkCust hover:text-darkGrayCust",
						},
					}}
				/>
			</div>
		</main>
	);
}

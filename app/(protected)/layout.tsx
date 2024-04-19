import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs"
import { frFR } from "@clerk/localizations"
import MembersHeader from "../components/MembersHeader"
import Footer from "../components/Footer"

export default function MembersLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider localization={frFR}>
			<ClerkLoaded>
				<MembersHeader />
				{children}
				<Footer />
			</ClerkLoaded>
		</ClerkProvider>
	)
}

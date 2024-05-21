import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs"
import { frFR } from "@clerk/localizations"
import MembersHeader from "../components/MembersHeader"
import Footer from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
		googleBot: {
			index: false,
			follow: false,
		},
	},
}

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

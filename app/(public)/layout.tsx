import Footer from "../components/Footer"
import Header from "../components/Header"

export default function MembersLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section>
			<Header />
			{children}
			<Footer />
		</section>
	)
}

import getContact from "@/sanity/lib/getContact";
import ContactForm from "./ContactForm";

export default async function Contact() {
	const contact = await getContact();

	return <ContactForm contact={contact} />;
}

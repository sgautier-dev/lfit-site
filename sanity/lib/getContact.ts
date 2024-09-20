import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getContact = unstable_cache(
	async (): Promise<Contact> => {
		const query = groq`*[_type == "contact"]{
        mainTitle,
        presentation,
        "image": image.asset->url,
    }[0]`

		const data: Contact = await client.fetch(query)

		return data
	},
	["contact"],
	{ tags: ["home"] }
)

export default getContact

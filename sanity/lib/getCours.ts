import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getCours = unstable_cache(
	async (): Promise<Cours> => {
		const query = groq`*[_type == "cours"]{
        mainTitle,
        presentation,
        title,
        text,
        "backgroundImage": backgroundImage.asset->url,
        "secondaryImage": secondaryImage.asset->url,
    }[0]`

		const data: Cours = await client.fetch(query)

		return data
	},
	["cours"],
	{ tags: ["home"] }
)

export default getCours

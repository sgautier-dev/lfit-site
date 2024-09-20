import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getCoaching = unstable_cache(
	async (): Promise<Coaching> => {
		const query = groq`*[_type == "coaching"]{
        mainTitle,
        presentation,
        title,
        text,
        "backgroundImage": backgroundImage.asset->url,
        "secondaryImage": secondaryImage.asset->url,
    }[0]`

		const data: Coaching = await client.fetch(query)

		return data
	},
	["coaching"],
	{ tags: ["home"] }
)

export default getCoaching

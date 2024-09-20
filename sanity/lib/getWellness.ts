import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getWellness = unstable_cache(
	async (): Promise<CoursSubSections> => {
		const query = groq`*[_type == "wellness"]{
        title,
        presentation,
        "backgroundImage": backgroundImage.asset->url,
        "practices": practices[]->{
            _id,
            name,
            "icon": icon->{
                value
            },
            description
        }
    }[0]`

		const data: CoursSubSections = await client.fetch(query)

		return data
	},
	["wellness"],
	{ tags: ["home"] }
)

export default getWellness

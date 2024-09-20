import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getFormation = unstable_cache(
	async (): Promise<Training> => {
		const query = groq`*[_type == "training"]{
        title,
        presentation,
        "backgroundImage": backgroundImage.asset->url,
        "formations": formations[]->{
        _id,
        title, 
        description, 
        "icon": icon->{title, value}
    },
        "diplomas": diplomas[]->{
            _id,
            title,
            "image": image.asset->url
        }
    }[0]`

		const data: Training = await client.fetch(query)

		return data
	},
	["training"],
	{ tags: ["home"] }
)

export default getFormation

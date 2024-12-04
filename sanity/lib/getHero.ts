import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getHero = unstable_cache(
	async (): Promise<Hero> => {
		const query = groq`*[_type == "hero"][0]{
        title,
        text,
		"backgroundImage": backgroundImage.asset->url,
        "heroImage": heroImage.asset->url,
      }`

		const data: Hero = await client.fetch(query)

		return data
	},
	["hero"],
	{ tags: ["home"] }
)

export default getHero

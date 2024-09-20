import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getVideos = unstable_cache(
	async (): Promise<Video[]> => {
		const query = groq`*[_type == "videos"] | order(_createdAt asc){
        _id,
        title,
        length,
        description,
        "videoUrl": video.asset->url,
        "category": category->name,
        "previewImageUrl": category->previewImage.asset->url,
        access
    }`

		const data: Video[] = await client.fetch(query)

		return data
	},
	["videos"],
	{ tags: ["videos"] }
)

export default getVideos

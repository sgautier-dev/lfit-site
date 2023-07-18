import { client } from "./client";
import groq from "groq";

const getVideos = async (): Promise<Video[]> => {
    const query = groq`*[_type == "videos"] | order(_createdAt asc){
        _id,
        title,
        length,
        description,
        "videoUrl": video.asset->url,
        "category": category->name,
        access
    }`;

    const data: Video[] = await client.fetch(query);

    return data;
};

export default getVideos;

import { client } from "./client";
import groq from "groq";

const getCoaching = async (): Promise<Coaching> => {
	const query = groq`*[_type == "coaching"]{
        mainTitle,
        presentation,
        title,
        text,
        "backgroundImage": backgroundImage.asset->url,
        "secondaryImage": secondaryImage.asset->url,
    }[0]`;

	const data: Coaching = await client.fetch(query);

	return data;
};

export default getCoaching;

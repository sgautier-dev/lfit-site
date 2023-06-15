import { client } from "./client";
import groq from "groq";

const getCours = async (): Promise<Cours> => {
	const query = groq`*[_type == "cours"]{
        mainTitle,
        presentation,
        title,
        text,
        "backgroundImage": backgroundImage.asset->url,
        "secondaryImage": secondaryImage.asset->url,
    }[0]`;

	const data: Cours = await client.fetch(query);

	return data;
};

export default getCours;

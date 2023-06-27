import { client } from "./client";
import groq from "groq";

const getRefining = async (): Promise<CoursSubSections> => {
	const query = groq`*[_type == "refining"]{
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
    }[0]`;

	const data: CoursSubSections = await client.fetch(query);

	return data;
};

export default getRefining;

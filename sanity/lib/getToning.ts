import { client } from "./client";
import groq from "groq";

const getToning = async (): Promise<CoursSubSections> => {
	const query = groq`*[_type == "toning"]{
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

export default getToning;

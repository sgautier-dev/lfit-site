import { client } from "./client";
import groq from "groq";

const getFormation = async (): Promise<Training> => {
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
    }[0]`;

	const data: Training = await client.fetch(query);

	return data;
};

export default getFormation;

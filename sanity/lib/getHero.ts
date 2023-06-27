import { client } from "./client";
import groq from "groq";

const getHero = async (): Promise<Hero> => {
	const query = groq`*[_type == "hero"][0]{
        title,
        text,
      }`;

	const data: Hero = await client.fetch(query);

	return data;
};

export default getHero;

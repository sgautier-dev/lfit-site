import { defineType } from "sanity";

export default defineType({
	name: "hero",
	type: "document",
	title: "Ma Présentation",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Titre",
            validation: (Rule) => Rule.required(),
		},
		{
			name: "text",
			title: "Texte",
			type: "text",
		},
	],
});

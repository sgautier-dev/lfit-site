import { defineType } from "sanity";

export default defineType({
	name: "refining",
	title: "S'affiner",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Titre",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "presentation",
			type: "text",
			title: "Présentation",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "backgroundImage",
			type: "image",
			title: "Image d'arrière-plan",
			options: {
				hotspot: true,
			},
		},
		{
			name: "practices",
			title: "Practices",
			type: "array",
			of: [{ type: "reference", to: { type: "practice" } }],
		},
	],
});

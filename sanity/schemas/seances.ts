import { defineType } from "sanity";

export default defineType({
	name: "seances",
	title: "Les séances",
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
			name: "schedule",
			title: "le planning",
			type: "array",
			of: [{ type: "reference", to: { type: "schedule" } }],
		},
	],
});

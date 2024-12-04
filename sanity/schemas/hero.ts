import { defineType } from "sanity"

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
		{
			name: "backgroundImage",
			type: "image",
			title: "Image d'arrière-plan",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "heroImage",
			type: "image",
			title: "Image principale",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
	],
})

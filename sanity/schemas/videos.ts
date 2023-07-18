import { defineField, defineType } from "sanity";

export default defineType({
	name: "videos",
	title: "Vidéos",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Titre de la vidéo",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
        {
			name: "length",
			title: "Durée de la vidéo",
			type: "string",
            description: "Format: XX mins",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
            validation: (Rule) => Rule.required(),
		},
		defineField({
			name: "video",
			title: "Vidéo à télécharger",
			type: "file",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "category",
			title: "Catégorie de la vidéo",
			type: "reference",
			to: { type: "practice" },
			validation: (Rule) => Rule.required(),
		}),
	],
});

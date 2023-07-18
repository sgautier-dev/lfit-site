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
		{
			name: "access",
			title: "Accès à la vidéo",
			type: "string",
			description: "Indiquez si la vidéo est payante ou gratuite",
			options: {
				list: [
					{ title: "Payant", value: "paid" },
					{ title: "Gratuit", value: "free" },
				],
				layout: "dropdown",
			},
			validation: (Rule) => Rule.required(),
			initialValue: "paid",
		},
		{
			name: "video",
			title: "Vidéo à télécharger",
			type: "file",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "category",
			title: "Catégorie de la vidéo",
			type: "reference",
			to: { type: "practice" },
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "title",
			length: "length",
		},
		prepare(selection) {
			const { title, length } = selection;
			return {
				title: title,
				subtitle: `Durée: ${length}`,
			};
		},
	},
});

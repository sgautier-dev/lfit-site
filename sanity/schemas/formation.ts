import { defineType } from "sanity";

export default defineType({
	name: "training",
	type: "document",
	title: "Ma Formation",
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
			validation: (Rule) => Rule.required(),
		},
		{
			name: "formations",
			type: "array",
			title: "Formations",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "title",
							type: "string",
							title: "Title",
							validation: (Rule) => Rule.required(),
						},
						{
							name: "description",
							type: "text",
							title: "Description",
						},
						{
							name: "icon",
							type: "reference",
							title: "Icon",
							to: [{ type: "icon" }],
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
		},
		{
			name: "diplomas",
			type: "array",
			title: "Diplomes",
			of: [{ type: "reference", to: [{ type: "diploma" }] }],
		},
	],
});

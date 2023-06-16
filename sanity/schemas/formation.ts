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
			name: 'formations',
			title: 'Formations',
			type: 'array',
			of: [
			  {
				type: 'reference',
				to: [{type: 'formations'}]
			  }
			]
		  },
		{
			name: "diplomas",
			type: "array",
			title: "Diplomes",
			of: [{ type: "reference", to: [{ type: "diploma" }] }],
		},
	],
});

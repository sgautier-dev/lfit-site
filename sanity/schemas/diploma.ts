import { defineType } from "sanity";

export default defineType({
	name: "diploma",
	type: "document",
	title: "Diplomes",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "image",
			type: "image",
			title: "Image",
			options: {
				hotspot: true,
			},
		},
	],
});

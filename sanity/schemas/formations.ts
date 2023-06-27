import { defineType } from "sanity";

export default defineType({
	name: "formations",
	title: "Formations",
	type: "document",
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
});

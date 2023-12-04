import { defineType } from "sanity"

export default defineType({
	name: "practice",
	title: "Pratiques",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "icon",
			title: "Icon",
			type: "reference",
			to: { type: "icon" },
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "previewImage",
			title: "Preview Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
})

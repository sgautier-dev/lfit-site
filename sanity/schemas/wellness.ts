import { defineType } from "sanity";

export default defineType({
	name: "wellness",
	title: "Bien-être",
	type: "document",
	fields: [
		{
			name: "practices",
			title: "Practices",
			type: "array",
			of: [{ type: "reference", to: { type: "practice" } }],
		},
	],
});

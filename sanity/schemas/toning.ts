import { defineType } from "sanity";

export default defineType({
	name: "toning",
	title: "Se tonifier",
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

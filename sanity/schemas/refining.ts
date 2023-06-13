import { defineType } from "sanity";

export default defineType({
	name: "refining",
	title: "S'affiner",
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

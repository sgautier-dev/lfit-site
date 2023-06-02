import { defineType } from "sanity";

export default defineType({
	name: "training",
	type: "document",
	title: "Formations",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Formation",
			description: "Nom de la formation",
            validation: (Rule) => Rule.required(),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "icon",
			type: "string",
			title: "Icone",
			options: {
				list: [
					{ title: "Pilates", value: "/images/icons8-pilates-60.png" },
					{ title: "Stretching", value: "/images/icons8-stratching-60.png" },
					{ title: "Yogalates", value: "/images/icons8-yoga-60.png" },
					{ title: "Total Silhouette", value: "/images/icons8-pushups-60.png" },
					{ title: "Abdos Fessiers", value: "/images/icons8-sit-ups-60.png" },
					{ title: "HIIT", value: "/images/icons8-fitnessBis-60.png" },
					{
						title: "Circuit Training",
						value: "/images/icons8-girl-running-60.png",
					},
					// add more icons here
				],
				layout: "dropdown",
			},
			validation: (Rule) => Rule.required(),
		},
	],
});

import { defineType } from "sanity";

export default defineType({
	name: "schedule",
	type: "document",
	title: "Planning",
	fields: [
		{
			name: "date",
			type: "string",
			title: "Jour",
			description: "Jour de la semaine",
			options: {
				list: [
					{ title: "Lundi", value: "Lundi" },
					{ title: "Mardi", value: "Mardi" },
					{ title: "Mercredi", value: "Mercredi" },
					{ title: "Jeudi", value: "Jeudi" },
					{ title: "Vendredi", value: "Vendredi" },
					{ title: "Samedi", value: "Samedi" },
					{ title: "Dimanche", value: "Dimanche" },
				],
				layout: "dropdown",
			},
		},
		{
			name: "sessions",
			type: "array",
			title: "Sessions",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "start",
							type: "string",
							title: "heure de début",
							description: "Format: HH:mm",
							validation: (Rule) =>
								Rule.custom((time: string) => {
									const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(
										time
									);
									return isValid ? true : "L'heure doit être au format HH:mm";
								}),
						},
						{
							name: "end",
							type: "string",
							title: "Heure de fin",
							description: "Format: HH:mm",
							validation: (Rule) =>
								Rule.custom((time: string) => {
									const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(
										time
									);
									return isValid ? true : "L'heure doit être au format HH:mm";
								}),
						},
						{
							name: "course",
							type: "string",
							title: "Nom du cours",
							validation: (Rule) => Rule.required(),
						},
						{
							name: "description",
							type: "text",
							title: "Description",
							validation: (Rule) => Rule.required(),
						},
						{
							name: "icon",
							type: "string",
							title: "Icone",
							options: {
								list: [
									{ title: "Pilates", value: "/images/icons8-pilates-30.png" },
									{
										title: "Stretching",
										value: "/images/icons8-stratching-30.png",
									},
									{ title: "Yogalates", value: "/images/icons8-yoga-30.png" },
									{
										title: "Total Silhouette",
										value: "/images/icons8-pushups-30.png",
									},
									{
										title: "Abdos Fessiers",
										value: "/images/icons8-sit-ups-30.png",
									},
									{ title: "HIIT", value: "/images/icons8-fitnessBis-30.png" },
									{
										title: "Circuit Training",
										value: "/images/icons8-girl-running-30.png",
									},
									// add more icons here
								],
								layout: "dropdown",
							},
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
		},
	],
});

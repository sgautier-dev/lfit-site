import { defineType } from "sanity";

export default defineType ({
    name: "cours",
    type: "document",
    title: "Mes Cours",
    fields: [
      {
        name: "mainTitle",
        type: "string",
        title: "Titre principal",
        validation: Rule => Rule.required()
      },
      {
        name: "presentation",
        type: "text",
        title: "Présentation",
        validation: Rule => Rule.required()
      },
      {
        name: "title",
        type: "string",
        title: "Titre",
        validation: Rule => Rule.required()
      },
      {
        name: "text",
        type: "blockContent",
        title: "Texte",
        validation: Rule => Rule.required()
      },
      {
        name: "backgroundImage",
        type: "image",
        title: "Image d'arrière-plan",
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      },
      {
        name: "secondaryImage",
        type: "image",
        title: "Image secondaire",
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      }
    ]
  });
  
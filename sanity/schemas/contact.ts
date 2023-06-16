import { defineType } from "sanity";

export default defineType ({
    name: "contact",
    type: "document",
    title: "Formulaire de contact",
    fields: [
      {
        name: "mainTitle",
        type: "string",
        title: "Titre",
        validation: Rule => Rule.required()
      },
      {
        name: "presentation",
        type: "text",
        title: "Présentation",
        validation: Rule => Rule.required()
      },
      
      {
        name: "image",
        type: "image",
        title: "Image",
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      },
    ]
  });
  
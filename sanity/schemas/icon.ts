import { defineType } from "sanity";

export default defineType({
    name: 'icon',
    title: 'Icon',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'value',
        title: 'Value (Large Icon)',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'valueSmall',
        title: 'Value (Small Icon)',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    ],
  })
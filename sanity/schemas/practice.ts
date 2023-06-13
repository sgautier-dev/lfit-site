import { defineType } from "sanity";

export default defineType({
    name: 'practice',
    title: 'Practice',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'reference',
        to: { type: 'icon' },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  })
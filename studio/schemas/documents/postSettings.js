export default {
  name: 'postSettings',
  title: 'Post Settings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
    {
      name: 'filters',
      title: 'Post Category Filters',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'postCategory' }],
        },
      ],
    },
  ],
}

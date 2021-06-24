export default {
  name: 'call',
  title: 'Call',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
    },
    {
      name: 'sequence',
      title: 'Sequence',
      type: 'number',
    },
  ],
}

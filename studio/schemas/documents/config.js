export default {
  title: 'Config',
  name: 'config',
  type: 'document',
  fields: [
    {
      title: 'SEO Metadata',
      name: 'seo',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'a11yImage',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        },
      ],
    },
  ],
}

export default {
  type: 'document',
  title: 'Post',
  name: 'post',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      title: 'Body',
      name: 'body',
      type: 'richText',
    },
  ],
}

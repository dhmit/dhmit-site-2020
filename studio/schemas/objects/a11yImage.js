export default {
  title: 'Image',
  name: 'a11yImage',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Alt Text',
      name: 'altText',
      type: 'string',
      description:
        'A short description of the image that helps with accessibility and SEO',
      validation: (Rule) => Rule.required(),
    },
  ],
}

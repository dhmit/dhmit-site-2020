export default {
  name: 'a11yImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description:
        'A short description of the image that helps with accessibility and SEO',
      validation: (Rule) => Rule.required(),
    },
  ],
}

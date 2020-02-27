export default {
  title: 'Image',
  name: 'a11yImageWithCaption',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Alternative Text',
      name: 'altText',
      type: 'string',
      description:
        'A short description of the image that helps with accessibility and SEO',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
  ],
  preview: {
    select: {
      caption: 'caption',
      altText: 'altText',
      media: 'image',
    },
    prepare: ({ caption, altText, media }) => ({
      title: caption ? caption : altText,
      media,
    }),
  },
}

export default {
  name: 'a11yImageWithCaption',
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
    {
      name: 'caption',
      title: 'Caption',
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

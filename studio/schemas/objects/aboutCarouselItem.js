export default {
  name: 'aboutCarouselItem',
  title: 'Carousel Item',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
    },
    {
      name: 'link',
      title: 'Link (Optional)',
      type: 'externalLink',
    },
  ],
}

export default {
  type: 'object',
  title: 'Carousel Item',
  name: 'aboutCarouselItem',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'richText',
    },
    {
      title: 'Link (Optional)',
      name: 'link',
      type: 'externalLink',
    },
  ],
}

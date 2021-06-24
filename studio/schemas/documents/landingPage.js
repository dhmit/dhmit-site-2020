export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'intro',
      title: 'Intro',
      type: 'object',
      fields: [
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
      ],
    },
    {
      name: 'about',
      title: 'About Carousel',
      type: 'object',
      fields: [
        {
          name: 'carouselItems',
          title: 'Carousel Items',
          type: 'array',
          of: [{ type: 'aboutCarouselItem' }],
          validation: (Rule) => Rule.max(3),
        },
        {
          name: 'carouselSettings',
          title: 'Carousel Settings',
          type: 'object',
          fields: [
            {
              name: 'autoplayDuration',
              title: 'Autoplay Duration',
              type: 'number',
              description:
                'The time it takes for the carousel to automatically advance to the next slide (in milliseconds).',
              validation: (Rule) => Rule.min(1000).max(20000),
            },
          ],
        },
      ],
    },
    {
      name: 'lab',
      title: 'Lab',
      type: 'object',
      fields: [
        {
          name: 'row1',
          title: 'Row 1',
          type: 'object',
          fields: [
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
              name: 'button',
              title: 'Button',
              type: 'externalLink',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'a11yImage' }],
              validation: (Rule) => Rule.max(2),
            },
          ],
        },
        {
          name: 'row2',
          title: 'Row 2',
          type: 'object',
          fields: [
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
              name: 'button',
              title: 'Button',
              type: 'externalLink',
            },
            // {
            //   name: 'images',
            //   title: 'Images',
            //   type: 'array',
            //   of: [{ type: 'a11yImage' }],
            //   validation: (Rule) => Rule.max(2),
            // },
          ],
        },
      ],
    },
    {
      name: 'newsCarousel',
      title: 'News Carousel',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
          options: {
            filter: `publishAt < now()`,
          },
        },
      ],
    },
    {
      name: 'newsletterCta',
      title: 'Newsletter CTA',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
        },
        {
          name: 'body',
          title: 'Body',
          type: 'string',
        },
      ],
    },
  ],
}

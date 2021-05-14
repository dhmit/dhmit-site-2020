export default {
  type: 'document',
  title: 'Landing Page',
  name: 'landingPage',
  fields: [
    {
      type: 'object',
      title: 'Intro',
      name: 'intro',
      fields: [
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
      ],
    },
    {
      type: 'object',
      title: 'About Carousel',
      name: 'about',
      fields: [
        {
          title: 'Carousel Items',
          name: 'carouselItems',
          type: 'array',
          of: [{ type: 'aboutCarouselItem' }],
          validation: (Rule) => Rule.max(3),
        },
        {
          title: 'Carousel Settings',
          name: 'carouselSettings',
          type: 'object',
          fields: [
            {
              title: 'Autoplay Duration',
              name: 'autoplayDuration',
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
      type: 'object',
      title: 'Lab',
      name: 'lab',
      fields: [
        {
          type: 'object',
          title: 'Row 1',
          name: 'row1',
          fields: [
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
              title: 'Button',
              name: 'button',
              type: 'externalLink',
            },
            {
              title: 'Images',
              name: 'images',
              type: 'array',
              of: [{ type: 'a11yImage' }],
              validation: (Rule) => Rule.max(2),
            },
          ],
        },
        {
          type: 'object',
          title: 'Row 2',
          name: 'row2',
          fields: [
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
              title: 'Button',
              name: 'button',
              type: 'externalLink',
            },
            {
              title: 'Images',
              name: 'images',
              type: 'array',
              of: [{ type: 'a11yImage' }],
              validation: (Rule) => Rule.max(2),
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      title: 'News Carousel',
      name: 'newsCarousel',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    },
    {
      type: 'object',
      title: 'Newsletter CTA',
      name: 'newsletterCta',
      fields: [
        {
          type: 'string',
          title: 'Headline',
          name: 'headline',
        },
        {
          type: 'string',
          title: 'Body',
          name: 'body',
        },
      ],
    },
    {
      type: 'object',
      title: 'Footer',
      name: 'footer',
      fieldsets: [{ title: 'Address', name: 'address' }],
      fields: [
        {
          title: 'Address Line 1',
          name: 'addressLine1',
          type: 'string',
          fieldset: 'address',
        },
        {
          title: 'Address Line 2',
          name: 'addressLine2',
          type: 'string',
          fieldset: 'address',
        },
        {
          title: 'Address Line 3',
          name: 'addressLine3',
          type: 'string',
          fieldset: 'address',
        },
        {
          title: 'Phone number',
          name: 'phone',
          type: 'string',
        },
        {
          title: 'Email Address',
          name: 'email',
          type: 'string',
        },
        {
          title: 'Twitter Handle',
          name: 'twitterHandle',
          type: 'string',
        },
        {
          title: 'Mellon Logo',
          name: 'mellonLogo',
          type: 'a11yImage',
        },
      ],
    },
  ],
}

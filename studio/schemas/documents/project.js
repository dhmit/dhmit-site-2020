export default {
  type: 'document',
  title: 'Project',
  name: 'project',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      subtitle: 'Subtitle',
      name: 'subtitle',
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
      title: 'Project Metadata',
      name: 'metadata',
      type: 'object',
      fields: [
        {
          title: 'Semester',
          name: 'semester',
          type: 'string',
          options: {
            layout: 'radio',
            direction: 'horizontal',
            list: [
              { title: 'Fall', value: 'fall' },
              { title: 'Spring', value: 'spring' },
            ],
          },
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Year',
          name: 'year',
          type: 'number',
          validation: (Rule) => Rule.required().min(2000), // must be a valid 4 digit year
        },
        {
          title: 'Links',
          name: 'links',
          type: 'array',
          of: [{ type: 'externalLink' }],
        },
      ],
    },
    {
      title: 'Project Image',
      name: 'image',
      type: 'a11yImageWithCaption',
    },
    {
      title: 'Editorial',
      name: 'editorial',
      type: 'richText',
    },
    {
      title: 'Student Team',
      name: 'studentTeam',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
    },
  ],
}

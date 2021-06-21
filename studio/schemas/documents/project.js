import React from 'react'
import Emoji from 'react-emoji-render'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: () => <Emoji style={{ fontSize: 23 }} text="💻" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      subtitle: 'Subtitle',
      description: 'The text that appears after the title for project cards',
      type: 'string',
    },
    {
      name: 'lede',
      subtitle: 'Lede',
      description:
        'The text that appears after the title for project detail pages',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'metadata',
      title: 'Project Metadata',
      type: 'object',
      fields: [
        {
          name: 'category',
          title: 'Category',
          type: 'reference',
          to: [{ type: 'projectCategory' }],
        },
        {
          name: 'semester',
          title: 'Semester',
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
          name: 'year',
          title: 'Year',
          type: 'number',
          validation: (Rule) => Rule.required().min(2000), // must be a valid 4 digit year
        },
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{ type: 'externalLink' }],
        },
      ],
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'a11yImageWithCaption',
    },
    {
      name: 'editorial',
      title: 'Editorial',
      type: 'richText',
    },
    {
      name: 'studentTeam',
      title: 'Student Team',
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

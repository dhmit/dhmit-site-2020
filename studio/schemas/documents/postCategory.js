import React from 'react'
import Emoji from 'react-emoji-render'

export default {
  name: 'postCategory',
  title: 'Post Category',
  type: 'document',
  icon: () => <Emoji style={{ fontSize: 23 }} text="🏷️" />,
  fields: [
    {
      name: 'title',
      title: 'Title (Plural)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'singularTitle',
      title: 'Title (Singular)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
    {
      name: 'badgeColor',
      title: 'Badge Color',
      type: 'color',
    },
  ],
}

import React from 'react'
import Emoji from 'react-emoji-render'

export default {
  name: 'personGroup',
  title: 'Person Group',
  type: 'document',
  icon: () => <Emoji style={{ fontSize: 23 }} text="🏷️" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hasListing',
      title: 'Has Listing?',
      description:
        'Optionally generate a paginated listing for this group (e.g. /people/:slug)',
      type: 'boolean',
    },
    {
      name: 'hasDetailPages',
      title: 'Has Detail Pages?',
      description:
        'Optionally generate a detail page for each person in this group (e.g. /person/:slug)',
      type: 'boolean',
    },
  ],
  initialValue: {
    hasListing: false,
    hasDetailPages: false,
  },
}

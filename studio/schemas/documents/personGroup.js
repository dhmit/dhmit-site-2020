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
      name: 'sortByName',
      title: 'Sort by name?',
      description: 'Sort alphabetically by name or sort manually above.',
      type: 'boolean',
    },
    {
      name: 'hasListing',
      title: 'Has listing?',
      description:
        'Optionally generate a paginated listing for this group (e.g. /people/:slug)',
      type: 'boolean',
    },
    {
      name: 'hasDetailPages',
      title: 'Has detail pages?',
      description:
        'Optionally generate a detail page for each person in this group (e.g. /person/:slug)',
      type: 'boolean',
    },
  ],
  initialValue: {
    sortByName: true,
    hasListing: false,
    hasDetailPages: false,
  },
}

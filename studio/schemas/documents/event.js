import React from 'react'
import Emoji from 'react-emoji-render'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: () => <Emoji style={{ fontSize: 23 }} text="🗓️" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      title: 'Event Metadata',
      type: 'object',
      fields: [
        {
          name: 'speakerName',
          title: 'Speaker Name',
          type: 'string',
        },
        {
          name: 'startDatetime',
          title: 'Start Date & Time',
          type: 'datetime',
        },
        {
          name: 'endDatetime',
          title: 'End Date & Time',
          type: 'datetime',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'externalLink',
        },
      ],
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'a11yImageWithCaption',
    },
    {
      name: 'editorial',
      title: 'Editorial',
      type: 'richText',
    },
  ],
}

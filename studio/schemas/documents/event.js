import React from 'react'
import Emoji from 'react-emoji-render'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: () => <Emoji style={{ fontSize: 23 }} text="🗓️" />,
  fields: [
    {
      title: 'Title',
      name: 'title',
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
      title: 'Event Metadata',
      name: 'metadata',
      type: 'object',
      fields: [
        {
          title: 'Speaker Name',
          name: 'speakerName',
          type: 'string',
        },
        {
          title: 'Start Date & Time',
          name: 'startDatetime',
          type: 'datetime',
        },
        {
          title: 'End Date & Time',
          name: 'endDatetime',
          type: 'datetime',
        },
        {
          title: 'Location',
          name: 'location',
          type: 'string',
        },
      ],
    },
    {
      title: 'Event Image',
      name: 'image',
      type: 'a11yImageWithCaption',
    },
    {
      title: 'Editorial',
      name: 'editorial',
      type: 'richText',
    },
  ],
}

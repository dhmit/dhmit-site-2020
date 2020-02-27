export default {
  type: 'document',
  title: 'Event',
  name: 'event',
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

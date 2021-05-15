import React from 'react'
import Emoji from 'react-emoji-render'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: () => <Emoji style={{ fontSize: 23 }} text="🖊️" />,
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
      name: 'publishAt',
      title: 'Publish Date',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
    },
  ],
}

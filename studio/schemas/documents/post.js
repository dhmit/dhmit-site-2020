import React from 'react'
import Emoji from 'react-emoji-render'

export default {
  type: 'document',
  title: 'Post',
  name: 'post',
  icon: () => <Emoji style={{ fontSize: 23 }} text="🖊️" />,
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
      title: 'Body',
      name: 'body',
      type: 'richText',
    },
  ],
}

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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'postCategory' }],
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
    {
      name: 'link',
      title: 'Link',
      description:
        'Leave the Body field blank and fill in this link field to create a post with no detail page and just an external link. Useful for Newsletters and other posts that are just links.',
      type: 'externalLink',
    },
    {
      name: 'image',
      title: 'Thumbnail Image',
      type: 'a11yImageWithCaption',
    },
  ],
}

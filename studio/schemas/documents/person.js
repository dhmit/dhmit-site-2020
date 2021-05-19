import React from 'react'
import Emoji from 'react-emoji-render'
import ConditionalField from '../../plugins/ConditionalField'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: () => <Emoji style={{ fontSize: 23 }} text="🤸" />,
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          'Staff',
          'UROP Students',
          'Former Members',
          'Steering Committee',
        ],
      },
      hidden: true,
    },
    {
      name: 'title',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'seq',
      title: 'Sequence',
      type: 'number',
      // inputComponent: ConditionalField,
      // options: {
      //   condition: ({ category }) => category === 'Staff',
      // },
      hidden: true,
    },
    {
      name: 'isAlum',
      title: 'Is lab alum?',
      type: 'boolean',
      hidden: true,
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      hidden: true,
      // inputComponent: ConditionalField,
      // options: {
      //   condition: ({ category }) =>
      //     category === 'Steering Committee' || category === 'Staff',
      // },
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      // inputComponent: ConditionalField,
      // options: {
      //   condition: ({ category }) =>
      //     category === 'UROP Students' || category === 'Former Members',
      // },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'richText',
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'email',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'externalLink',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
}

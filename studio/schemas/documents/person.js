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
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) =>
          category === 'Staff' || category === 'Steering Committee',
      },
    },
    {
      name: 'seq',
      title: 'Sequence',
      type: 'number',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) => category === 'Staff',
      },
    },
    {
      name: 'isAlum',
      title: 'Is lab alum?',
      type: 'boolean',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) =>
          category === 'Steering Committee' || category === 'Staff',
      },
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) =>
          category === 'UROP Students' || category === 'Former Members',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
}

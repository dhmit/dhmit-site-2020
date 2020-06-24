import ConditionalField from '../../plugins/ConditionalField'

export default {
  type: 'document',
  title: 'Person',
  name: 'person',
  fields: [
    {
      title: 'Full Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
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
      title: 'Title',
      name: 'title',
      type: 'string',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) =>
          category === 'Staff' || category === 'Steering Committee',
      },
    },
    {
      title: 'Is lab alum?',
      name: 'isAlum',
      type: 'boolean',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) => category === 'Steering Committee',
      },
    },
    {
      title: 'Headshot',
      name: 'headshot',
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

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
      // inputComponent: ConditionalField,
      options: {
        condition: (document) =>
          document.category === 'Staff' ||
          document.category === 'Steering Committee',
      },
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      // inputComponent: ConditionalField,
      options: {
        condition: (document) => document.category === 'Steering Committee',
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

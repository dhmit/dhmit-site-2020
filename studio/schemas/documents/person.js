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
      description: 'This field is only used for Staff and Steering Committee',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: 'This field is only used for Steering Committee',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
}

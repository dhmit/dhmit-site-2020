export default {
  name: 'projectSettings',
  title: 'Project Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'home',
      title: 'Projects Homepage',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'richText',
        },
        {
          name: 'featuredProject',
          title: 'Featured Project',
          type: 'reference',
          to: [{ type: 'project' }],
        },
        {
          name: 'modules',
          title: 'Modules',
          type: 'array',
          of: [
            {
              name: '3up',
              title: '3-Up',
              type: 'object',
              fields: [
                {
                  name: 'category',
                  title: 'Category',
                  type: 'reference',
                  to: [{ type: 'projectCategory' }],
                },
              ],
              preview: {
                select: { category: 'category.title' },
                prepare({ category, ...selection }) {
                  return {
                    ...selection,
                    title: '3-Up',
                    subtitle: category ? `Latest in ${category}` : ``,
                  }
                },
              },
            },
            {
              name: '6up',
              title: '6-Up',
              type: 'object',
              fields: [
                {
                  name: 'category',
                  title: 'Category',
                  type: 'reference',
                  to: [{ type: 'projectCategory' }],
                },
              ],
              preview: {
                select: { category: 'category.title' },
                prepare({ category, ...selection }) {
                  return {
                    ...selection,
                    title: '6-Up',
                    subtitle: category ? `Latest in ${category}` : ``,
                  }
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'filters',
      title: 'Project Category Filters',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projectCategory' }],
        },
      ],
    },
  ],
}

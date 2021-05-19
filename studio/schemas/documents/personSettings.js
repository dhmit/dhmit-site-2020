export default {
  name: 'personSettings',
  title: 'People Settings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'page',
      title: 'People Page',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'modules',
          title: 'Modules',
          type: 'array',
          of: [
            {
              name: 'peoplePageModule',
              title: 'People Page Module',
              type: 'object',
              fields: [
                {
                  name: 'group',
                  title: 'Group',
                  type: 'reference',
                  to: [{ type: 'personGroup' }],
                },
                {
                  name: 'showSubtitles',
                  title: 'Show subtitles',
                  description:
                    'Toggle subtitles for each person listed within this module',
                  type: 'boolean',
                },
                {
                  name: 'link',
                  title: 'View More Link',
                  description:
                    'Optionally add a link to a collection (e.g. View Alumni)',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'reference',
                      title: 'Reference',
                      type: 'reference',
                      to: [{ type: 'personGroup' }],
                    },
                  ],
                },
              ],
              preview: {
                select: { category: 'category.title' },
                prepare({ category, ...selection }) {
                  return {
                    ...selection,
                    title: category ?? ``,
                  }
                },
              },
            },
          ],
        },
      ],
    },
  ],
}

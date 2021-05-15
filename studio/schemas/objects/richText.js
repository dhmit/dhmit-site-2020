export default {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'blocks',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: { decorators: [] },
        },
      ],
    },
  ],
  preview: {
    select: {
      blocks: 'blocks',
    },
    prepare(value) {
      const block = (value.blocks || []).find((b) => b._type === 'block')
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No title',
      }
    },
  },
}

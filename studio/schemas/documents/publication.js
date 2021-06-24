export default {
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'string',
    },
    {
      name: 'journal',
      title: 'Journal',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
}

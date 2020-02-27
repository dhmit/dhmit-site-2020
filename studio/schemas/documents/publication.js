export default {
  type: 'document',
  title: 'Publication',
  name: 'publication',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Publication Date',
      name: 'publicationDate',
      type: 'date',
    },
    {
      title: 'Authors',
      name: 'authors',
      type: 'string',
    },
    {
      title: 'Journal',
      name: 'journal',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
}

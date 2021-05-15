// - Headline (string)
// - Name (string)
// - Image (with alt text and optional caption)
// - Editorial (rich text)
// - Blurb (optionally used for landing page Faculty spotlight block. if not provided, the full editorial text will be truncated)

export default {
  name: 'facultySpotlight',
  title: 'Faculty Spotlight',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'a11yImageWithCaption',
    },
    {
      name: 'editorial',
      title: 'Editorial',
      type: 'richText',
    },
    {
      name: 'teaser',
      title: 'Teaser',
      description:
        'optionally used for the Faculty Spotlight teaser block on the landing page. If left empty, the full editorial text will be used and truncated.',
      type: 'richText',
    },
  ],
}

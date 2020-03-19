// - Headline (string)
// - Name (string)
// - Image (with alt text and optional caption)
// - Editorial (rich text)
// - Blurb (optionally used for landing page Faculty spotlight block. if not provided, the full editorial text will be truncated)

export default {
  type: 'document',
  title: 'Faculty Spotlight',
  name: 'facultySpotlight',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'a11yImageWithCaption',
    },
    {
      title: 'Editorial',
      name: 'editorial',
      type: 'richText',
    },
    {
      title: 'Teaser',
      name: 'teaser',
      description:
        'optionally used for the Faculty Spotlight teaser block on the landing page. If left empty, the full editorial text will be used and truncated.',
      type: 'richText',
    },
  ],
}

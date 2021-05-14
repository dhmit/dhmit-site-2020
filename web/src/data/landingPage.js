const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')

module.exports = async function() {
  const landingPage = await client.fetch(
    groq`
    *[_type == "landingPage"] {
      intro,
      "projects": *[_type == "project"] | order(metadata.year desc, metadata.semester, title) {
        title,
        subtitle,
        metadata,
        "slug": slug.current,
        "image": {
          ...image.image.asset->,
          "altText": image.altText,
        }
      },
      about,
      lab {
        row1 {
          ...,
          "images": images[] {
            altText,
            ...image.asset->
          },
        },
        row2 {
          ...,
          "images": images[] {
            altText,
            ...image.asset->
          },
        }
      },
      newsCarousel,
      newsletterCta,
      "events": *[_type == 'event'] [0..3] | order(metadata.startDatetime) {
        title,
        "slug": slug.current,
        "image": {
          ...image.image.asset->,
          "altText": image.altText,
          "caption": image.caption
        },
        ...metadata
      },
      footer {
        ...,
        "mellonLogo": {
          ...mellonLogo.image.asset->,
          "altText": mellonLogo.altText,
          "caption": mellonLogo.caption
        },
      },
   } [0]`,
  )

  return allBlocksToHtml(landingPage)
}

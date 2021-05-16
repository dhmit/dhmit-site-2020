const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')
const toEST = require('../util/toEST')

module.exports = async function() {
  const landingPage = await client.fetch(
    groq`
    *[_type == "landingPage"][0] {
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
      newsCarousel[]-> {
        title,
        publishAt,
        'slug': slug.current,
      },
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
   }`,
  )

  landingPage.newsCarousel.forEach((post) => {
    post.publishAt = toEST(post.publishAt)
  })

  landingPage.events.forEach((event) => {
    event.startDatetime = toEST(event.startDatetime)
    event.endDatetime = toEST(event.endDatetime)
  })

  return allBlocksToHtml(landingPage)
}

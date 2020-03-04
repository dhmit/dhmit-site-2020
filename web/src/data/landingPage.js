const client = require('../util/client')
const groq = require('groq')
const blocksToHtml = require(`@sanity/block-content-to-html`)

module.exports = async function() {
  const landingPage = await client.fetch(
    groq`
    *[_type == "landingPage"] {
      intro,
      "projects": *[_type == "project"] | order(metadata.year desc, metadata.semester desc, title) {
         title,
         subtitle,
         slug,
         metadata,
         "image": image.image.asset->,
         "altText": image.altText
      }
    } [0]`,
  )

  landingPage.intro.body = blocksToHtml(landingPage.intro.body)

  return landingPage
}

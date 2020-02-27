const client = require('../util/client')
const groq = require('groq')
const blocksToHtml = require(`@sanity/block-content-to-html`)

module.exports = async function() {
  const landingPage = await client.fetch(
    groq`
    *[_type == "landingPage"] {
      intro,
    } [0]`,
  )

  landingPage.intro.body = blocksToHtml(landingPage.intro.body)

  return landingPage
}

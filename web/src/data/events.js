const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')

module.exports = async function() {
  const events = await client.fetch(
    groq`
      *[_type == "event"] {
        title,
        metadata,
        editorial,
        "slug": slug.current,
        "image": {
          ...image.image.asset->,
          "altText": image.altText,
          "caption": image.caption
        }
      }
    `,
  )

  return allBlocksToHtml(events)
}

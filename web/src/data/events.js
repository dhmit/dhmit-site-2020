const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')
const toEST = require('../util/toEST')

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

  events.forEach((event) => {
    event.metadata.startDatetime = toEST(event.metadata.startDatetime)
    event.metadata.endDatetime = toEST(event.metadata.endDatetime)
  })

  return allBlocksToHtml(events)
}

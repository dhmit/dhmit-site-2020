const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')
const toEST = require('../util/toEST')
const chunk = require('lodash.chunk')

const eventCard = groq`{
  title,
  metadata,
  editorial,
  "slug": slug.current,
  "image": {
    ...image.image.asset->,
    "altText": image.altText,
    "caption": image.caption
  }
}`

module.exports = async function() {
  const data = await client.fetch(
    groq`{
      'upcomingEvents': *[_type == "event" && metadata.startDatetime > now()] ${eventCard},
      'pastEvents': *[_type == "event" && metadata.startDatetime < now()] ${eventCard},
    }`,
  )

  data.upcomingEvents.forEach((event) => {
    event.metadata.startDatetime = toEST(event.metadata.startDatetime)
    event.metadata.endDatetime = toEST(event.metadata.endDatetime)
  })

  data.pastEvents.forEach((event) => {
    event.metadata.startDatetime = toEST(event.metadata.startDatetime)
    event.metadata.endDatetime = toEST(event.metadata.endDatetime)
  })

  const PER_PAGE = 6
  const pagination = []
  const chunkedEvents = chunk(data.pastEvents, PER_PAGE)

  chunkedEvents.forEach((events, index) => {
    pagination.push({
      upcomingEvents: index === 0 ? data.upcomingEvents : null,
      pastEvents: events,
      current: index + 1,
      total: chunkedEvents.length,
    })
  })

  return pagination
}

const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')

module.exports = async function() {
  const events = await client.fetch(
    groq`*[_type == 'publication'] | order(publicationDate desc)`,
  )

  return allBlocksToHtml(events)
}

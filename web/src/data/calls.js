const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')

module.exports = async function() {
  const events = await client.fetch(
    groq`*[_type == 'call'] | order(sequence asc)`,
  )

  return allBlocksToHtml(events)
}

const client = require('../util/client')
const groq = require('groq')

module.exports = async function() {
  const data = await client.fetch(groq`*[_type == "footer"][0]`)
  return data
}

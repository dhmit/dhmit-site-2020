const client = require('../util/client.js')
const groq = require('groq')

module.exports = async function() {
  const config = await client.fetch(groq`*[_type == 'config'] {
    seo {
      ...,
      image {
        "url": image.asset->.url,
        altText,
        "width": image.asset->.metadata.dimensions.width,
        "height": image.asset->.metadata.dimensions.height
      }
    }
  } [0]`)
  return config
}

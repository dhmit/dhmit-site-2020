const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')

module.exports = async function() {
  const projects = await client.fetch(
    groq`
      *[_type == "project"] {
        title,
        subtitle,
        metadata {
          ...,
          category-> {
            title,
            "slug": slug.current,
          },
        },
        editorial,
        studentTeam[]-> {
          ...,
          "headshot": headshot.asset->
        },
        "slug": slug.current,
        "image": {
          ...image.image.asset->,
          "altText": image.altText,
          "caption": image.caption
        }
      }
    `,
  )

  return allBlocksToHtml(projects)
}

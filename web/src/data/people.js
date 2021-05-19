const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')
const uniqBy = require('lodash.uniqby')

module.exports = async function() {
  const data = await client.fetch(
    groq`{
      "settings": *[_type == "personSettings"][0] {
        page {
          title,
          modules[] {
            group-> {
              ...,
              people[]-> {
                ...,
                "slug": slug.current,
                "headshot": headshot.asset->,
              },
            },
            showSubtitles,
            link {
              title,
              "slug": reference->slug.current,
            },
          },
        },
      },
      "detailPages": *[_type == "personGroup" && hasDetailPages == true] {
        people[]-> {
          _id,
          name,
          title,
          bio,
          metadata,
          "slug": slug.current,
          "headshot": headshot.asset->,
        },
      },
    }`,
  )

  data.detailPages = data.detailPages.reduce(
    (acc, group) => uniqBy([...acc, ...group.people], '_id'),
    [],
  )

  return allBlocksToHtml(data)
}
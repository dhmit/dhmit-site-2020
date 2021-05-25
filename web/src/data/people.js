const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')
const uniqBy = require('lodash.uniqby')
const chunk = require('lodash.chunk')

const personCard = groq`{
  _id,
  name,
  title,
  bio,
  metadata,
  "slug": slug.current,
  "headshot": headshot.asset->,
}`

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
        people[]-> ${personCard},
      },
      "groups": *[_type == "personGroup" && hasListing == true] {
        ...,
        "slug": slug.current,
        people[]-> ${personCard},
      },
    }`,
  )

  data.detailPages = data.detailPages.reduce(
    (acc, group) => uniqBy([...acc, ...group.people], '_id'),
    [],
  )

  const PER_PAGE = 1
  const pagination = []

  data.groups.forEach((group) => {
    if (group && group.people && group.people.length) {
      const chunked = chunk(group.people, PER_PAGE)
      chunked.forEach((people, index) => {
        pagination.push({
          ...group,
          people,
          current: index + 1,
          total: chunked.length,
        })
      })
    } else {
      pagination.push({
        ...group,
        people: [],
        current: 1,
        total: 1,
      })
    }
  })

  data.pagination = pagination

  return allBlocksToHtml(data)
}

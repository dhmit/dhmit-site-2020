const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')

module.exports = async function() {
  const data = await client.fetch(
    groq`*[_type == "projectSettings"][0] {
      "filters": [
        {
          "title": "All",
          "slug": "",
        },
        ...filters[]-> {
          title,
          "slug": slug.current,
        },
      ],
      home {
        title,
        description,
        featuredProject-> {
          title,
          subtitle,
          content,
          "slug": slug.current,
          "image": {
            ...image.image.asset->,
            "altText": image.altText,
            "caption": image.caption
          },
        },
        modules[] {
          _type,
          "title": category->title,
          "slug": category->slug.current,
          "projects": *[_type == "project" && references(^.category._ref)][0...7] | order(metadata.year desc, metadata.semester, title) {
            title,
            subtitle,
            metadata { semester, year },
            "slug": slug.current,
            "image": {
              ...image.image.asset->,
              "altText": image.altText,
              "caption": image.caption
            },
          },
        },
      },
    }`,
  )

  return allBlocksToHtml(data)
}

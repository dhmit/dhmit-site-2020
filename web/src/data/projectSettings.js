const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')
const chunk = require('lodash.chunk')

const projectSort = groq`order(metadata.year desc, metadata.semester, title)`

const projectCard = groq`{
  title,
  subtitle,
  metadata { semester, year },
  "slug": slug.current,
  "image": {
    ...image.image.asset->,
    "altText": image.altText,
    "caption": image.caption
  },
}`

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
      "categories": filters[]-> {
        title,
        description,
        "slug": slug.current,
        "projects": *[_type == "project" && references(^._id)] | ${projectSort} ${projectCard},
      },
      home {
        title,
        description,
        featuredProject-> ${projectCard},
        modules[] {
          _type,
          "title": category->title,
          "slug": category->slug.current,
          "projects": *[_type == "project" && references(^.category._ref)][0...7] | order(metadata.year desc, metadata.semester, title) ${projectCard},
        },
      },
    }`,
  )

  const PER_PAGE = 6
  const pagination = []

  data.categories.forEach((category) => {
    if (category.projects.length) {
      const chunkedProjects = chunk(category.projects, PER_PAGE)
      chunkedProjects.forEach((projects, index) => {
        pagination.push({
          ...category,
          projects,
          current: index + 1,
          total: chunkedProjects.length,
        })
      })
    } else {
      pagination.push({
        ...category,
        projects: [],
        current: 1,
        total: 1,
      })
    }
  })

  data.pagination = pagination

  return allBlocksToHtml(data)
}

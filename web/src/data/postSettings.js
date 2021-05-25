const client = require('../util/client')
const groq = require('groq')
const allBlocksToHtml = require('../util/allBlocksToHtml')
const toEST = require('../util/toEST')
const chunk = require('lodash.chunk')

const postCard = groq`{
  title,
  category-> {
    title,
    singularTitle,
    "badgeColor": badgeColor.hex,
    "slug": slug.current,
  },
  "slug": slug.current,
  publishAt,
  link,
  body,
  "image": {
    ...image.image.asset->,
    "altText": image.altText,
    "caption": image.caption
  },
}`

module.exports = async function() {
  const data = await client.fetch(
    groq`*[_type == "postSettings"][0] {
      "filters": [
        {
          "title": "All",
          "singularTitle": "All",
          "slug": null,
        },
        ...filters[]-> {
          title,
          singularTitle,
          "slug": slug.current,
        },
      ],
      "categories": [
        {
          "title": @.title,
          "description": @.description,
          "slug": null,
          "posts": *[_type == "post"] | order(publishAt desc) ${postCard},
        },
        ...filters[]-> {
          title,
          singularTitle,
          description,
          "slug": slug.current,
          "posts": *[_type == "post" && references(^._id)] | order(publishAt desc) ${postCard},
        },
      ],
      "posts": *[_type == "post"] ${postCard},
      "collections": *[_type == "postCollection"] {
        title,
        description,
        "slug": slug.current,
        posts[]-> ${postCard},
      }
    }`,
  )

  const PER_PAGE = 2
  const pagination = []

  data.categories.forEach((category) => {
    if (category.posts.length) {
      category.posts.forEach((post) => {
        post.publishAt = toEST(post.publishAt)
      })

      const chunkedPosts = chunk(category.posts, PER_PAGE)
      chunkedPosts.forEach((posts, index) => {
        pagination.push({
          ...category,
          posts,
          current: index + 1,
          total: chunkedPosts.length,
        })
      })
    } else {
      pagination.push({
        ...category,
        posts: [],
        current: 1,
        total: 1,
      })
    }
  })

  data.pagination = pagination

  return allBlocksToHtml(data)
}

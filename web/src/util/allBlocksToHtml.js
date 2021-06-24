const blocksToHtml = require(`@sanity/block-content-to-html`)

const h = blocksToHtml.h
const serializers = {
  marks: {
    link: (props) =>
      h(
        'a',
        {
          href: props.mark.href,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        props.children,
      ),
  },
}

module.exports = function allBlocksToHtml(data) {
  if (!data) return data
  if (typeof data === 'object') {
    if (data._type && data._type === 'richText') {
      return blocksToHtml({
        blocks: data.blocks,
        serializers,
      })
    } else {
      const entries = Object.entries(data)
      for (let i = 0; i < entries.length; i++) {
        const [key, val] = entries[i]
        data[key] = allBlocksToHtml(val)
      }
      return data
    }
  } else if (typeof data === 'array') {
    return data.map(allBlocksToHtml)
  } else {
    return data
  }
}

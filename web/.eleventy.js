const fs = require('fs')
const path = require('path')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const webpackAsset = async (name) => {
  const manifestData = await readFile(
    path.resolve(__dirname, 'src/templates/includes/manifest.json'),
  )
  const manifest = JSON.parse(manifestData)

  return manifest[name]
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addLiquidShortcode('webpackAsset', webpackAsset)
  eleventyConfig.addShortcode(
    'debug',
    (value) =>
      `<pre class="ph25 pv100 f14 mono bg-tan">${JSON.stringify(
        value,
        null,
        2,
      )}</pre>`,
  )

  return {
    dir: {
      input: 'src/templates',
      data: '../data',
      includes: 'includes',
      output: 'build',
    },
    passthroughFileCopy: true,
  }
}

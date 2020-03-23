const client = require('@sanity/client')

module.exports = client({
  projectId: 'fxpgvmzc',
  dataset: 'production',
  useCdn: false,
})

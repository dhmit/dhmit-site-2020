const spacetime = require('spacetime')

module.exports = function toEST(t) {
  return spacetime(t)
    .goto('America/New_York')
    .format('iso')
}

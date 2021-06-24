// a noop tagged template function to enable html syntax highlighting
module.exports = function html(b) {
  for (var c = b[0], a = 1, d = arguments.length; a < d; a++)
    c += arguments[a] + b[a]
  return c
}

module.exports = function formatNumber(number, localeString = 'en-US') {
  if (typeof number === 'string') {
    number = parseInt(number, 10)
  }

  return new Intl.NumberFormat(localeString).format(number)
}

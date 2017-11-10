// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-symbols-details

'use strict'

const { fetch } = require('../utils/fetch')

exports.symbolsdetails = (baseUrl, log = true) => {
  const url = baseUrl + `/v1/symbols_details`
  return fetch(url, 'SYMBOLS_DETAILS', log)
}

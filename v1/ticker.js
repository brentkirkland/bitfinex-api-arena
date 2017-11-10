// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-ticker

'use strict'

const fetch = require('node-fetch')

async function ticker (baseUrl, symbol, log = false) {
  try {
    const url = baseUrl + `/v1/pubticker/${symbol}`
    const data = await fetch(url).then(res => res.json())
    if (log) {
      console.log('TICKER --------------')
      console.log(data)
      console.log('---------------------')
    }
    return data
  } catch (e) {
    throw Error('Error getting ticker')
  }
}

exports.ticker = ticker

// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-symbols

'use strict'

const fetch = require('node-fetch')

async function symbols (baseUrl, log = false) {
  try {
    const url = baseUrl + `/v1/symbols`
    const data = await fetch(url).then(res => res.json())
    if (log) {
      console.log('SYMBOLS -------------')
      console.log(data)
      console.log('---------------------')
    }
    return data
  } catch (e) {
    throw Error('Error getting symbols')
  }
}

exports.symbols = symbols

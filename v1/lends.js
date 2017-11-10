// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-lends

'use strict'

const fetch = require('node-fetch')

async function lends (baseUrl, currency, log = false) {
  try {
    const url = baseUrl + `/v1/lends/${currency}`
    const data = await fetch(url).then(res => res.json())
    if (log) {
      console.log('LENDS ---------------')
      console.log(data)
      console.log('---------------------')
    }
    return data
  } catch (e) {
    throw Error('Error getting lends')
  }
}

exports.lends = lends

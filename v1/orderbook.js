// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-orderbook

'use strict'

const fetch = require('node-fetch')

async function orderbook (baseUrl, symbol, log = false) {
  try {
    const url = baseUrl + `/v1/book/${symbol}`
    const data = await fetch(url).then(res => res.json())
    if (log) {
      console.log('ORDER BOOK ----------')
      console.log(data)
      console.log('---------------------')
    }
    return data
  } catch (e) {
    throw Error('Error getting order book')
  }
}

exports.orderbook = orderbook

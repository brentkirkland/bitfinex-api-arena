// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-orderbook

'use strict'

const { v1Url } = require('../config.js')

const fetch = require('node-fetch')
const request = require('request')

async function orderbook (symbol) {
  try {
    const url = v1Url + `/book/${symbol}`
    const req = await fetch(url).then(res => res.json())
    console.log('ORDER BOOK ----------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting order book')
  }
}

exports.orderbook = orderbook

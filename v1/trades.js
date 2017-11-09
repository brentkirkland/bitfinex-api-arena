// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-trades

'use strict'

const { v1Url } = require('../config.js')

const fetch = require('node-fetch')
const request = require('request')

async function trades (symbol) {
  try {
    const url = v1Url + `/trades/${symbol}`
    const req = await fetch(url).then(res => res.json())
    console.log('TRADES --------------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting stats')
  }
}

exports.trades = trades

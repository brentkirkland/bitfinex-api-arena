// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-ticker

'use strict'

const { v1Url } = require('../config.js')

const fetch = require('node-fetch')
const request = require('request')

async function ticker (symbol) {
  try {
    const url = v1Url + `/pubticker/${symbol}`
    const req = await fetch(url).then(res => res.json())
    console.log('TICKER --------------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting ticker')
  }
}

exports.ticker = ticker

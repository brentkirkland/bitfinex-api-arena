// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-symbols

'use strict'

const { v1Url } = require('../config.js')

const fetch = require('node-fetch')
const request = require('request')

async function symbols () {
  try {
    const url = v1Url + `/symbols`
    const req = await fetch(url).then(res => res.json())
    console.log('SYMBOLS -------------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting symbols')
  }
}

exports.symbols = symbols

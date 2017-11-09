// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-lends

'use strict'

const { v1Url } = require('../config.js')
const fetch = require('node-fetch')
const request = require('request')

async function lends (currency) {
  try {
    const url = v1Url + `/lends/${currency}`
    const req = await fetch(url).then(res => res.json())
    console.log('LENDS ---------------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting lends')
  }
}

exports.lends = lends

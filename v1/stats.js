// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-stats

'use strict'

const { v1Url } = require('../config.js')

const fetch = require('node-fetch')
const request = require('request')

async function stats (symbol) {
  try {
    const url = v1Url + `/stats/${symbol}`
    const req = await fetch(url).then(res => res.json())
    console.log('STATS ---------------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting stats')
  }
}

exports.stats = stats

// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-stats

'use strict'

const fetch = require('node-fetch')

async function stats (baseUrl, symbol, log = false) {
  try {
    const url = baseUrl + `/v1/stats/${symbol}`
    const data = await fetch(url).then(res => res.json())
    if (log) {
      console.log('STATS ---------------')
      console.log(data)
      console.log('---------------------')
    }
    return data
  } catch (e) {
    throw Error('Error getting stats')
  }
}

exports.stats = stats

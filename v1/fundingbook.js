// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-fundingbook

'use strict'

const fetch = require('node-fetch')

async function fundingbook (baseUrl, currency, log = false) {
  try {
    const url = baseUrl + `/v1/lendbook/${currency}`
    const data = await fetch(url).then(res => res.json())
    if (log) {
      console.log('FUNDING BOOK --------')
      console.log(data)
      console.log('---------------------')
    }
    return data
  } catch (e) {
    throw Error('Error getting funding book')
  }
}

exports.fundingbook = fundingbook

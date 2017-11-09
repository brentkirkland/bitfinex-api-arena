// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-fundingbook

'use strict'

const { v1Url } = require('../config.js')

const fetch = require('node-fetch')
const request = require('request')

async function fundingbook (currency) {
  try {
    const url = v1Url + `/lendbook/${currency}`
    const req = await fetch(url).then(res => res.json())
    console.log('FUNDING BOOK --------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting funding book')
  }
}

exports.fundingbook = fundingbook

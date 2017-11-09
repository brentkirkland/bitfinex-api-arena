// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-public-symbols-details

'use strict'

const { v1Url } = require('../config.js')

const fetch = require('node-fetch')
const request = require('request')

async function symboldetails () {
  try {
    const url = v1Url + `/symbols_details`
    const req = await fetch(url).then(res => res.json())
    console.log('SYMBOL DETAILS ------')
    console.log(req)
    console.log('---------------------')
  } catch (e) {
    throw Error('Error getting symbol details')
  }
}

exports.symboldetails = symboldetails

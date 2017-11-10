// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-auth-summary

'use-strict'

const { fetch } = require('../utils/fetch')
const { auth } = require('../utils/auth')

exports.summary = (baseUrl, apiKey, apiSecret, log = false) => {
  const url = '/v1/summary'
  const authData = auth(baseUrl, url, apiKey, apiSecret)
  return fetch(authData.url, 'SUMMARY', log, authData.options)
}

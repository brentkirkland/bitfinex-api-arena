// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-auth-margin-information

'use-strict'

const { fetch } = require('../utils/fetch')
const { auth } = require('../utils/auth')

exports.margininformation = (baseUrl, apiKey, apiSecret, log = false) => {
  const url = '/v1/margin_infos'
  const authData = auth(baseUrl, url, apiKey, apiSecret)
  return fetch(authData.url, 'SUMMARY', log, authData.options)
}

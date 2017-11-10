// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-auth-summary

'use-strict'

const { fetch } = require('../utils/fetch')
const { auth } = require('../utils/auth')

exports.keypermissions = (baseUrl, apiKey, apiSecret, log = false) => {
  const url = '/v1/key_info'
  const authData = auth(baseUrl, url, apiKey, apiSecret)
  return fetch(authData.url, 'KEY PERMISSIONS', log, authData.options)
}

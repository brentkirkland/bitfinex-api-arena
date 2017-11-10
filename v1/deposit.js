// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-auth-deposit

'use-strict'

const { fetch } = require('../utils/fetch')
const { auth } = require('../utils/auth')

exports.deposit = (baseUrl, apiKey, apiSecret, walletName, method, log = false) => {
  const url = '/v1/deposit/new'
  const extras = {
    'wallet_name': walletName,
    'method': method,
    'renew': 0
  }
  const authData = auth(baseUrl, url, apiKey, apiSecret, extras)
  return fetch(authData.url, 'DEPOSIT', log, authData.options)
}

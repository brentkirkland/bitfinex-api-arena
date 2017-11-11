// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-auth-wallet-balances

'use-strict'

const { fetch } = require('../utils/fetch')
const { auth } = require('../utils/auth')

exports.walletbalances = (baseUrl, apiKey, apiSecret, log = false) => {
  const url = '/v1/balances'
  const authData = auth(baseUrl, url, apiKey, apiSecret)
  console.log(authData)
  return fetch(authData.url, 'WALLET BALANCES', log, authData.options)
}

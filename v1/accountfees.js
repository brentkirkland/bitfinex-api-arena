// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-auth-account-fees

'use-strict'

const { fetch } = require('../utils/fetch')
const { auth } = require('../utils/auth')

exports.accountfees = (baseUrl, apiKey, apiSecret, log = false) => {
  const url = '/v1/account_fees'
  const authData = auth(baseUrl, url, apiKey, apiSecret)
  return fetch(authData.url, 'ACCOUNT_FEES', log, authData.options)
}

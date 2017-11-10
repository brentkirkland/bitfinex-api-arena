// GET MORE INFO HERE:
// https://docs.bitfinex.com/v1/reference#rest-auth-account-info

'use-strict'

const { fetch } = require('../utils/fetch')
const { auth } = require('../utils/auth')

async function accountinfo (baseUrl, apiKey, apiSecret, log = false) {
  const url = '/v1/account_infos'
  const authData = auth(baseUrl, url, apiKey, apiSecret)
  return fetch(authData.url, 'ACCOUNT_INFO', log, authData.options)
}

exports.accountinfo = accountinfo

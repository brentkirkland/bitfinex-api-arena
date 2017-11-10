'use-strict'

const crypto = require('crypto')

exports.auth = (baseUrl, url, apiKey, apiSecret, payloadExtras = {}) => {
  const completeUrl = baseUrl + url
  const nonce = Date.now().toString()
  const defaultBody = {
    'request': url,
    nonce
  }
  const body = {...defaultBody, ...payloadExtras}
  const payload = Buffer.from(JSON.stringify(body)).toString('base64')
  const signature = crypto
  .createHmac('sha384', apiSecret)
  .update(payload)
  .digest('hex')
  const data = {
    'url': completeUrl,
    'options': {
      method: 'POST',
      headers: {
        'X-BFX-APIKEY': apiKey,
        'X-BFX-PAYLOAD': payload,
        'X-BFX-SIGNATURE': signature
      },
      body: JSON.stringify(body)
    }
  }
  return data
}

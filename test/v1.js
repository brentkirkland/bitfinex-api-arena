/* eslint-env mocha */

'use strict'

const assert = require('assert')

const {
  baseUrl,
  apiKey,
  apiSecretKey
 } = require('../config.js')

const {
  ticker,
  stats,
  fundingbook,
  orderbook,
  lends,
  symbols,
  symbolsdetails,
  accountinfo,
  accountfees,
  summary,
  deposit,
  keypermissions,
  margininformation
 } = require('../v1')

const symbol = 'btcusd'
const currency = 'usd'

const log = false

describe('v1', () => {
  it('ticker: ticker returns an object', (done) => {
    ticker(baseUrl, symbol, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('stats: stats returns an object', (done) => {
    stats(baseUrl, symbol, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('fundingbook: fundingbook returns an object', (done) => {
    fundingbook(baseUrl, currency, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('orderbook: orderbook returns an object', (done) => {
    orderbook(baseUrl, symbol, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('lends: lends returns an object', (done) => {
    lends(baseUrl, currency, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('symbols: symbols returns an object', (done) => {
    symbols(baseUrl, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(res.length > 1, true, 'response has btcusd')
      done()
    })
  }).timeout(7000)

  it('symbolsdetails: symbolsdetails returns an object', (done) => {
    symbolsdetails(baseUrl, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(res.length > 1, true, 'response has btcusd')
      done()
    })
  }).timeout(7000)

  it('accountinfo: accountinfo returns an object', (done) => {
    accountinfo(baseUrl, apiKey, apiSecretKey, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('accountfees: accountfees returns an object', (done) => {
    accountfees(baseUrl, apiKey, apiSecretKey, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('summary: summary returns an object', (done) => {
    summary(baseUrl, apiKey, apiSecretKey, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('deposit: deposit returns an object', (done) => {
    deposit(baseUrl, apiKey, apiSecretKey, 'exchange', 'bitcoin', log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  it('keypermissions: keypermissions returns an object', (done) => {
    keypermissions(baseUrl, apiKey, apiSecretKey, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('margininformation: margininformation returns an object', (done) => {
    margininformation(baseUrl, apiKey, apiSecretKey, log)
    .then(res => {
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
})

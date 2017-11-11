/* eslint-env mocha */

'use strict'

const assert = require('assert')

const BFX = require('../bitfinex-api-node')
const {
  apiKey,
  apiSecretKey
 } = require('../config.js')

const opts = {
  version: 1
}

const symbol = 'btcusd'
const currency = 'usd'

const bfxRest = new BFX(apiKey, apiSecretKey, opts).rest

describe('bfx-api-node', () => {
  it('ticker: ticker returns an object', (done) => {
    bfxRest.ticker(symbol, (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('stats: stats returns an object', (done) => {
    bfxRest.stats(symbol, (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('fundingbook: fundingbook returns an object', (done) => {
    bfxRest.fundingbook(currency, (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('fundingbook: fundingbook limits', (done) => {
    const options = {'limit_asks': 2, 'limit_bids': 2}
    bfxRest.fundingbook(currency, options, (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('orderbook: orderbook returns an object', (done) => {
    bfxRest.orderbook(symbol, (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('trades: trades returns an object', (done) => {
    bfxRest.trades(symbol, (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('lends: lends returns an object', (done) => {
    bfxRest.lends(currency, (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  it('symbols: symbols returns an object', (done) => {
    bfxRest.get_symbols((err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(res.length > 1, true, 'response has btcusd')
      done()
    })
  }).timeout(7000)
  it('symbolsdetails: symbolsdetails returns an object', (done) => {
    bfxRest.symbols_details((err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(res.length > 1, true, 'response has btcusd')
      done()
    })
  }).timeout(7000)
  it('account_infos: account_infos returns an object', (done) => {
    bfxRest.account_infos((err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  // account_fees not implemented
  // it('account_fees: account_fees returns an object', (done) => {
  //   bfxRest.account_fees((err, res) => {
  //     if (err) console.log(err)
  //     assert.equal(typeof res, 'object', 'response is an object')
  //     assert.equal(!('message' in res), true, 'error message')
  //     done()
  //   })
  // }).timeout(7000)
  // account_summary not implemented
  // needs to be checked!!
  it('new_deposit: new_deposit returns an object', (done) => {
    bfxRest.new_deposit('BTC', 'bitcoin', 'deposit', (err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)
  // key_permissions not implemented
  it('margin_infos: margin_infos returns an object', (done) => {
    bfxRest.margin_infos((err, res) => {
      if (err) console.log(err)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  // test balances with public
  // it('wallet_balances: margin_infos returns an object', (done) => {
  //   bfxRest.wallet_balances((err, res) => {
  //     if (err) console.log(err)
  //     console.log(res)
  //     assert.equal(typeof res, 'object', 'response is an object')
  //     assert.equal(!('message' in res), true, 'error message')
  //     done()
  //   })
  // }).timeout(7000)
  it('transfer: transfer returns an object', (done) => {
    bfxRest.transfer(1.0, 'USD', 'exchange', 'trading', (err, res) => {
      if (err) console.log(err)
      console.log(res)
      assert.equal(typeof res, 'object', 'response is an object')
      assert.equal(!('message' in res), true, 'error message')
      done()
    })
  }).timeout(7000)

  // skipping withdraw
})

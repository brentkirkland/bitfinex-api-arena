'use strict'


const async = require('async')

// public end points
const { ticker } = require('./ticker')
const { stats } = require('./stats')
const { fundingbook } = require('./fundingbook')
const { orderbook } = require('./orderbook')
const { lends } = require('./lends')
const { symbols } = require('./symbols')
const { symboldetails } = require('./symboldetails')

const symbol = 'btcusd'
const currency = 'btc'

// async apply is messing me up! come back to this...
// async.waterfall(
//   [
//     async.apply(ticker, symbol),
//     async.apply(stats, symbol),
//   ],
//   (err, result) => console.log('done')
// )

// ticker(symbol)
// stats(symbol)
// fundingbook(currency)
// orderbook(symbol)
// lends(currency)
// symbols()
symboldetails()

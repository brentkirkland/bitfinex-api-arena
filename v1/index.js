'use strict'

// public endpoints
const { ticker } = require('./ticker')
const { stats } = require('./stats')
const { fundingbook } = require('./fundingbook')
const { orderbook } = require('./orderbook')
const { lends } = require('./lends')
const { symbols } = require('./symbols')
const { symbolsdetails } = require('./symbolsdetails')

// auth endpoints
const { accountinfo } = require('./accountinfo')
const { accountfees } = require('./accountfees')
const { summary } = require('./summary')
const { deposit } = require('./deposit')
const { keypermissions } = require('./keypermissions')
const { margininformation } = require('./margininformation')

module.exports = {
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
}

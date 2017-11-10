'use strict'

const fetch = require('node-fetch')

async function fetchData (url, name = 'FETCH FUNC', log = false, options = {}) {
  try {
    const data = await fetch(url, options).then(res => res.json())
    if (log) {
      console.log(name, '---')
      console.log(data)
      console.log('----------')
    }
    return data
  } catch (e) {
    throw Error('Bad fetch')
  }
}

exports.fetch = fetchData

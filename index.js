'use strict'

/**
 * Module dependencies
 */

const load = require('async-script')

/**
 * Export `Script`
 */

module.exports = Script

/**
 * Document
 */

const document = typeof window !== 'undefined' && window.document

/**
 * Initialize `Script`
 */

function Script (url) {
  const p = new Deferred()
  if (!document) return p.reject('Not in a browser environment')

  load(document, url, function (err) {
    return err
      ? p.reject(err)
      : p.resolve(url)
  })

  return p
}

/**
 * Deferred
 */

function Deferred () {
  const p = new Promise((resolve, reject) => {
    this.resolve = resolve
    this.reject = reject
  })

  this.then = p.then.bind(p)
  this.catch = p.catch.bind(p)
}

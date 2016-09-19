const assert = require('assert')
const load = require('../index')

describe('asp', () => {
  it('should load stripe', async () => {
    let p = load('https://checkout.stripe.com/v3/checkout.js')
    await p
    assert.ok(window.StripeCheckout.configure)
  })
})

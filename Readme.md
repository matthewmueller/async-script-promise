
# async-script-promise

  asynchronously load scripts.

  Returns a promise, so you can kick it off as soon as your script loads, but wait to use it until it's actually loaded.

## Install

```js
npm install async-script-promise
```

## Use

```js
it('should load stripe', async () => {
  // start loading...
  let p = load('https://checkout.stripe.com/v3/checkout.js')

  // ensure that it's finished before using it
  await p
  assert.ok(window.StripeCheckout.configure)
})
```

## License

MIT

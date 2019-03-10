const swtclib = require('../src/swtclib')

const SwtcLib = require('swtc-lib')
swtclib.promisifyAll(SwtcLib)
const remote = new SwtcLib.Remote(swtclib.REMOTE)
const Wallet = SwtcLib.Wallet

remote.connectAsync().then(r => { console.log(r); remote.disconnect(); process.exit() })

console.log(Wallet.generate())
console.log(swtclib.makeCurrency('swt'))
console.log(swtclib.makeCurrency('vcc'))
console.log(swtclib.makeAmount(swtclib.makeCurrency('swt'), 100))
console.log(swtclib.makeAmount(swtclib.makeCurrency('jcc'), 100))

const ToolSet = require('../index')
const expect = require('chai').expect

const currency_swt = {currency: 'SWT', issuer: ''}
const currency_cny = {currency: 'CNY', issuer: "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or"}

describe('toolset functions', function () {

    describe('promisifyAll function', function () {
        it('should has function promisifyAll', function () {
			let toolset = new ToolSet()
            expect(typeof toolset.promisifyAll).to.equal('function')
        })
    })
    describe('makeCurrency function', function () {
		let toolset = new ToolSet()
        it('makeCurrency() should generate correct SWT', function () {
            expect(toolset.makeCurrency()).to.deep.equal(currency_swt)
        })
        it('makeCurrency("swt") should generate correct SWT', function () {
            expect(toolset.makeCurrency('swt')).to.deep.equal(currency_swt)
        })
        it('makeCurrency("cny") should generate correct CNY', function () {
            expect(toolset.makeCurrency('cny')).to.deep.equal(currency_cny)
        })
        it('makeCurrency("cnt") should generate correct CNY', function () {
            expect(toolset.makeCurrency('cnt')).to.deep.equal(currency_cny)
        })
    })
    describe('makeAmount function', function () {
		let toolset = new ToolSet()
        it('makeAmount() should generate same makeAmount("swt")', function () {
            expect(toolset.makeAmount()).to.deep.equal(toolset.makeAmount('swt'))
        })
        it('makeAmount("swt",100) should generate 100 SWT amount', function () {
            expect(toolset.makeAmount('swt', 100).value).to.equal(100)
        })
        it('makeAmount("cny",100) should generate same makeAmount("cnt",100)', function () {
            expect(toolset.makeAmount('cny',100)).to.deep.equal(toolset.makeAmount('cnt',100))
        })
    })

})

//const SwtcLib = require('swtc-lib')
//toolset.promisifyAll(SwtcLib)
//const remote = new SwtcLib.Remote(toolset.REMOTE)
//const Wallet = SwtcLib.Wallet
//
//remote.connectAsync().then(r => { console.log(r); remote.disconnect(); process.exit() })
//
//console.log(Wallet.generate())
//console.log(toolset.makeCurrency('swt'))
//console.log(toolset.makeCurrency('vcc'))
//console.log(toolset.makeAmount(toolset.makeCurrency('swt'), 100))
//console.log(toolset.makeAmount(toolset.makeCurrency('jcc'), 100))
//console.log(toolset.makeAmount('swt', 100))
//console.log(toolset.makeAmount('vcc', 100))

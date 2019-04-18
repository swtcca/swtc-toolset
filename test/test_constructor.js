const ToolSet = require('../index')
const expect = require('chai').expect

describe('toolset constructor', function () {

    describe('instantiation', function () {
        it('should instantiate a toolset object', function () {
			let toolset = new ToolSet()
            expect(typeof toolset).to.equal('object')
        })
    })

    describe('instantiation', function () {
        it('instantiate a toolset with server', function () {
			let toolset = new ToolSet({server: 'wss://test.jingtum.com:5020'})
            expect(toolset.REMOTE.server).to.equal('wss://test.jingtum.com:5020')
        })
    })

    describe('instantiation', function () {
        it('instantiate a toolset with issuer', function () {
			let toolset = new ToolSet({issuer: 'jabcdefghijklmnopqrstuvwxyz'})
            expect(toolset.ISSUER).to.equal('jabcdefghijklmnopqrstuvwxyz')
        })
    })

    describe('instantiation', function () {
        it('test net differ from product net', function () {
			let toolset = new ToolSet()
			let toolset_testnet = new ToolSet({testnet: true})
            expect(toolset).to.not.deep.equal(toolset_testnet)
        })
    })
})

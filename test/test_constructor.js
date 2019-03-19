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
        it('test net differ from product net', function () {
			let toolset = new ToolSet()
			let toolset_testnet = new ToolSet({testnet: true})
            expect(toolset).to.not.deep.equal(toolset_testnet)
        })
    })

    describe('instantiation', function () {
        it('default_remote is honored', function () {
			let toolset = new ToolSet({default_remote: 'wss://c04.jingtum.com:5020'})
            expect(toolset.REMOTE.server).to.equal('wss://c04.jingtum.com:5020')
        })
    })
})

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
			let toolset_testnet = new ToolSet(testnet=true)
            expect(toolset).to.not.deep.equal(toolset_testnet)
        })
    })
})

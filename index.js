// some short cuts for modern javascript development and effeciency
const BlueBird = require('bluebird')
const CURRENCIES = { 'CNT': 'CNY', 'JCC': 'JJCC', 'SLASH': 'JSLASH', 'MOAC': 'JMOAC', 'CALL': 'JCALL', 'EKT': 'JEKT', 'ETH': 'JETH' }

class SwtcToolSet {
	constructor(params={}) {
		if (params.testnet) {
			this.ISSUER = params.issuer || 'jBciDE8Q3uJjf111VeiUNM775AMKHEbBLS'
			this.REMOTE = {server: params.server || 'ws://ts5.jingtum.com:5020', local_sign: true }
		} else {
			this.ISSUER = params.issuer || 'jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or'
			this.REMOTE = {server: params.server || 'ws://swtclib.daszichan.com:5020', local_sign: true }
		}
	}

	promisifyAll (swtclib) { BlueBird.promisifyAll(swtclib) }
	requestServerInfo (remote) { return remote.requestServerInfo() }
	buildAccountSetTx (remote, params) { return remote.buildAccountSetTx(params) }
	deployContractTx (remote, params) { return remote.deployContractTx(params) }
	callContractTx (remote, params) { return remote.callContractTx(params) }
	buildPaymentTx (remote, params) { return remote.buildPaymentTx(params) }
	buildOfferCreateTx (remote, params) { return remote.buildOfferCreateTx(params) }
	buildOfferCancelTx (remote, params) { return remote.buildOfferCancelTx(params) }
	buildRelationTx (remote, params) { return remote.buildRelationTx(params) }
	requestLedger (remote, params) { return remote.requestLedger(params) }
	requestOrderBook (remote, params) { return remote.requestOrderBook(params) }
	requestServerInfo (remote) { return remote.requestServerInfo() }
	requestLedgerClosed (remote) { return remote.requestLedgerClosed() }
	requestAccountTums (remote, wallet) { return remote.requestAccountTums({account: wallet.address || wallet}) }
	requestAccountTx (remote, wallet) { return remote.requestAccountTx({account: wallet.address || wallet}) }
	requestAccountInfo (remote, wallet) { return remote.requestAccountInfo({account: wallet.address || wallet}) }
	requestAccountOffers (remote, wallet) { return remote.requestAccountOffers({account: wallet.address || wallet}) }
	requestAccountRelations (remote, wallet) { return remote.requestAccountRelations({account: wallet.address || wallet}) }
	
	initialize () {
		let JLIB
		try {
			JLIB = require('swtc-lib')
		} catch (error) {
			try {
				JLIB = require('jingtum-lib')
			} catch (error) {
				throw new Error('need either swtc-lib or jingtum-lib to work')
			}
		}
		this.promisifyAll(JLIB)
		return JLIB
	}
	makeCurrency (currency='SWT', issuer=this.ISSUER) {
		currency = currency.toUpperCase()
		currency = CURRENCIES.hasOwnProperty(currency) ? CURRENCIES[currency] : currency
		return (currency === 'SWT') ?
			{currency: currency, issuer: ''} :
			{currency: currency, issuer: issuer}
	}
	makeAmount (value=1, currency='SWT', issuer=this.ISSUER) {
		return (typeof currency === 'object') ?
			Object.assign({}, currency, {value: Number(value)}) :
			Object.assign({}, this.makeCurrency(currency, issuer), {value: Number(value)})
	}
}

module.exports = SwtcToolSet

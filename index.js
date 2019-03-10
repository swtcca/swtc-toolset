const BlueBird = require('bluebird')

class SwtcToolSet {
	constructor(testnet=false) {
		this.SWT = {currency: 'SWT', issuer: ''}
		this.ISSUER = 'jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or'
		this.CURRENCIES = { 'CNT': 'CNY' }
		if (testnet) {
			this.REMOTE = {server: 'ws://ts5.jingtum.com:5020', local_sign: true }
		} else {
			this.REMOTE = {server: 'wss://c05.jingtum.com:5020', local_sign: true }
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
	
	makeCurrency (currency='SWT', issuer=this.ISSUER) {
		currency = currency.toUpperCase()
		currency = this.CURRENCIES.hasOwnProperty(currency) ? this.CURRENCIES[currency] : currency
		return (currency === 'SWT') ?
			{currency: currency, issuer: ''} :
			{currency: currency, issuer: issuer}
	}
	makeAmount (currency='SWT', value=1) {
		return (typeof currency === 'object') ?
			Object.assign({}, currency, {value: value}) :
			Object.assign({}, this.makeCurrency(currency), {value: value})
	}
}

module.exports = SwtcToolSet

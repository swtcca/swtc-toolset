const BlueBird = require('bluebird')

const swtclib = {
	promisifyAll:			(swtclib) => BlueBird.promisifyAll(swtclib),
	requestServerInfo:		(remote) => remote.requestServerInfo(),
	buildAccountSetTx:		(remote, params) => remote.buildAccountSetTx(params),
	deployContractTx:		(remote, params) => remote.deployContractTx(params),
	callContractTx:			(remote, params) => remote.callContractTx(params),
	buildPaymentTx:			(remote, params) => remote.buildPaymentTx(params),
	buildOfferCreateTx:		(remote, params) => remote.buildOfferCreateTx(params),
	buildOfferCancelTx:		(remote, params) => remote.buildOfferCancelTx(params),
	buildRelationTx:		(remote, params) => remote.buildRelationTx(params),
	requestLedger:			(remote, params) => remote.requestLedger(params),
	requestOrderBook:		(remote, params) => remote.requestOrderBook(params),
	requestServerInfo:		(remote) => remote.requestServerInfo(),
	requestLedgerClosed:	(remote) => remote.requestLedgerClosed(),
	requestAccountTums:		(remote, wallet) => remote.requestAccountTums({account: wallet.address || wallet}),
	requestAccountTx:		(remote, wallet) => remote.requestAccountTx({account: wallet.address || wallet}),
	requestAccountInfo:		(remote, wallet) => remote.requestAccountInfo({account: wallet.address || wallet}),
	requestAccountOffers:	(remote, wallet) => remote.requestAccountOffers({account: wallet.address || wallet}),
	requestAccountRelations:	(remote, wallet) => remote.requestAccountRelations({account: wallet.address || wallet}),
	SWT:					{currency: 'SWT', issuer: ''},
	ISSUER:					'jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or',
	REMOTE:					{server: 'wss://c05.jingtum.com:5020', local_sign: true },
	makeCurrency:			function (currency, issuer='jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or') { return currency.toUpperCase() === 'SWT' ? {currency: 'SWT', issuer: ''} : {currency: currency.toUpperCase(), issuer: issuer} }, 
	makeAmount:				function (currency, value) { return Object.assign({}, currency, {value: value}) },
}

module.exports = swtclib

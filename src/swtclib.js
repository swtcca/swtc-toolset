const swtclib = {
	getAccountInfo:	(remote, wallet) => remote.requestAccountInfo({account: wallet.address || wallet}),
	buildPaymentTx:	(remote, params) => remote.buildPaymentTx(params),
}

module.exports = swtclib

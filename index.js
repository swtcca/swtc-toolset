const fs = require('fs');
const axios = require('axios');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
const sleep_promise = time => new Promise(res => setTimeout(() => res(), time));

const Store = require('./src/beedle')
const swtclib = require('./src/swtclib')

function jsonParam(obj) {
	return JSON.stringify(obj)
}

function getRequest(url, config={}) {
	return axios.get(url, config)
}
function postRequest(url, content, config={}) {
	return axios.post(url, content)
}

function writeStream(file) {
	return fs.createWriteStream(file, 'utf-8')
}

function castString(target) {
	if (typeof(target) === 'object') { return `${JSON.stringify(target,null,'\t')}\n` }
	else if (typeof(target) === 'number') { return `${target}\n` }
	else if (typeof(target) === 'string') { return `${target}\n` }
	else { return `${typeof(target)}\n` }
}

function readFile(file) {
	return fs.readFileSync(file,'utf-8');
}

function writeFile(file, data) {
	return fs.writeFileSync(file, data);
}

function statFile(file) {
	return fs.statSync(file);
}

function generateWallet() {
	return Wallet.generate();
}

function testGenerateWallet() {
	w = generateWallet();
	console.log(w);
}

function readStream(file) {
	var rs = fs.createReadStream(file, 'utf-8');

	rs.on('data', function (chunk) {
		chunk.trim().split('\n').forEach( line => console.log(`\t......${line}`));
	});
	rs.on('end', function () {
		console.log('\t......');
	});
	rs.on('error', function (err) {
		console.log('\t!!!!!! ' + err);
	});
	return rs;
}

function random_item(items){
	return items[Math.floor(Math.random() * items.length)];
}

async function sleep (duration) {
	await sleep_promise(duration);
}

module.exports = {
	exec,
	random_item,
	readFile,
	writeFile,
	statFile,
	readStream,
	writeStream,
	jsonParam,
	getRequest,
	postRequest,
	castString,
	sleep,
	swtclib,
	Store
}

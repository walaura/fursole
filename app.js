const Fursole = require('console').Console;
const util = require('util');
const random = require('./util/random');
const emoji = require('./data/emoji');

Fursole.prototype.log = function(...args) {
	let output = util.format.apply(null, args);
	this._stdout.write(random(emoji.animals.all)+emoji.joiners.log+output+"\n");
}

Fursole.prototype.info = function(...args) {
	let output = util.format.apply(null, args);
	this._stdout.write(random(emoji.animals.all)+emoji.joiners.info+output+"\n");
}

Fursole.prototype.error = function(...args) {
	let output = util.format.apply(null, args);
	this._stdout.write(random(emoji.animals.error)+emoji.joiners.error+output.toUpperCase()+"\n");
}

Fursole.prototype.warn = Fursole.prototype.error;

const fursole = new Fursole(process.stdout, process.stderr);
fursole.Fursole = Fursole;

module.exports = fursole;

const expect = require("chai").expect;
const console = require('../app.js');

/*
	just checking that no exceptions are being thrown really
*/

describe("Fursole", () => {
	it("does a console.log", () => {
		console.log('console log')
	});
	it("does a console.info", () => {
		console.info('console info')
	});
	it("does a console.warn", () => {
		console.warn('console warn')
	});
	it("does a console.error", () => {
		console.error('console error')
	});
	it("does a console.trace", () => {
		console.trace('console trace')
	});
});

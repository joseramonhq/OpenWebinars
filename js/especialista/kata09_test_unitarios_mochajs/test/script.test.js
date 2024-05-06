let fs = require('fs');
let vm = require('vm');

let code = fs.readFileSync('script.js');

vm.runInThisContext(code);

let assert = require("assert");

describe("Sum of n numbers", () => {
	it("Should return the sum of n numbers", () => {
		assert.equal(sum(1, 2, 3, 4, 5), 15);
	});

	it("Should return the sum of n positive numbers and n negative numbers", () => {
		assert.equal(sum(1, 2, 3, 4, 5, -1, -2, -3, -4, -5), 0);
	})

	it("Should return the sum of n positive float numbers and n negative float numbers ", () => {
		assert.equal(sum(1.5, 2.3, -3.8, 1), 1);
	})

	//etc...
});
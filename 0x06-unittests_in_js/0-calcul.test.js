const assert = require("assert");
const mocha = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber(1, 5);
      assert.strictEqual(res, 6);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber(1.3, 2.3);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber(1.6, 2.7);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber(0, 0);
      assert.strictEqual(res, 0);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber(-1.6, -1.7);
      assert.strictEqual(res, -4);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber(-1.4, -1.3);
	assert.strictEqual(res, -2);
    });
});

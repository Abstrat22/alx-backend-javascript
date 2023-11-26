const chai = require("chai");
const mocha = require("mocha");
const expect = chai.expect;

const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it("checking if numbers are rounded", function() {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it("checking if numbers are rounded", function() {
      expect(calculateNumber("SUBTRACT", 1.4, 2.2)).to.equal(-1);
    });
    it("checking if numbers are rounded", function() {
      expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
    });
    it("checking if numbers are rounded", function() {
      expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
    });
    it("checking if numbers are rounded", function() {
      expect(calculateNumber("DIVIDE", 1.7, 0)).to.equal("Error");
    });
    it("checking if numbers are rounded", function() {
      expect(calculateNumber("DIVIDE", 1.4, 4.6)).to.equal(0.2);;
    });
});

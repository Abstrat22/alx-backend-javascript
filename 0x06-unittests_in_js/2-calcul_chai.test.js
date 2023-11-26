const chai = require("chai");
const mocha = require("mocha");
const expect = chai.expect;

const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it("checking if numbers are rounded", function() {
      const res = calculateNumber("SUM", 1, 2);
      expect(res).to.be.equal(3);
    });
    it("checking if numbers are rounded", function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      expect(res).to.be.equal(-1);;
    });
    it("checking if numbers are rounded", function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      expect(res).to.be.equal(2);;
    });
    it("checking if numbers are rounded", function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      expect(res).to.be.equal(2);
    });
    it("checking if numbers are rounded", function() {
      const res = calculateNumber("DIVIDE", 1.7, 0);
      expect(res).to.be.equal("Error");
    });
    it("checking if numbers are rounded", function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      expect(res).to.be.equal(0.2);;
    });
});

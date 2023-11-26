const chai = require("chai");
const mocha = require("mocha");
const expect = chai.expect;

const calculateNumber = require("./2-calcul_chai");

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
describe("calculateNumber", function() {
  describe("When type is SUM", function() {
it("checking if numbers are rounded", function() {
    expect(calculateNumber("SUM", 1, 2)).to.equal(3);
});
it("checking if numbers are rounded", function() {
    expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
});
  });
  describe("When type is SUBTRACT", function() {
it("checking if numbers are rounded", function() {
    expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
});
it("checking if numbers are rounded", function() {
    expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
});
it("checking if numbers are rounded", function() {
    expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
});
  });
  describe("When type is DIVIDE", function() {
it("checking if numbers are rounded", function() {
    expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
});
it("checking if numbers are rounded", function() {
    expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
});
it("checking if numbers are rounded", function() {
    expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
});
  });
});

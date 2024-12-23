import { expect } from "chai";
import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).to.equal(0);
  });

  it("should return the number itself for a single number", () => {
    expect(calculator.add("1")).to.equal(1);
    expect(calculator.add("5")).to.equal(5);
  });
  it("should return the sum of two numbers separated by a comma", () => {
    expect(calculator.add("1,2")).to.equal(3);
    expect(calculator.add("4,5")).to.equal(9);
  });
  it("should return the sum of multiple numbers separated by commas", () => {
    expect(calculator.add("1,2,3")).to.equal(6);
    expect(calculator.add("4,5,6,7")).to.equal(22);
  });
  it("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).to.equal(6);
    expect(calculator.add("4\n5\n6")).to.equal(15);
  });
  it("should handle custom delimiters specified at the start of the string", () => {
    expect(calculator.add("//;\n1;2")).to.equal(3);
    expect(calculator.add("//|\n4|5|6")).to.equal(15);
  });
  it("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).to.throw(
      "negative numbers not allowed: -2"
    );
    expect(() => calculator.add("-1,-2,-3")).to.throw(
      "negative numbers not allowed: -1,-2,-3"
    );
  });
});

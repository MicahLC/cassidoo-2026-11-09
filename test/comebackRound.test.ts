import { expect } from "chai";
import { comebackRound } from "../src/comebackRound.js";

describe("comebackRound", () => {
  it.only("handles email example #1", () => {
    expect(comebackRound([
      [5, 3, 2],
      [0, 5, 2],
      [4, 2, 2],
      [1, 3, 0],
    ])).to.equal(2);
  });

  it("handles email example #2", () => {
    expect(comebackRound([
      [4, 2],
      [1, 3],
      [2, 1],
    ])).to.equal(3);
  });

  it("handles email example #3", () => {
    expect(comebackRound([
      [4, 2],
      [1, 3],
    ])).to.equal(-1);
  });
});

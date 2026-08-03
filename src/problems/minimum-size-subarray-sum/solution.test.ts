import { describe, it, expect } from "vitest";
import { minSubArrayLen } from "./solution";

describe.skip("min subarray length", () => {
  it.skip("ex 1", () => {
    //Arrange
    const nums = [1, 4, 3, 6, 2, 1, 7];
    const target = 7;
    //Act
    const actual = minSubArrayLen(target, nums);
    //Assert
    expect(actual).toEqual(1);
  });
  it("ex 2", () => {
    //Arrange
    const nums = [1, 4, 3, 6, 2, 1, 7];
    const target = 9;
    //Act
    const actual = minSubArrayLen(target, nums);
    //Assert
    expect(actual).toEqual(2);
  });
});

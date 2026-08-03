import { describe, it, expect } from "vitest";
import { biggestSumSubArr } from "./solution";

describe("biggest sum sub array", () => {
  it("ex 1", () => {
    // Arrange
    const nums = [4, 2, 1, -9, 8, 4, 3];
    const k = 3;
    //Act
    const actual = biggestSumSubArr(nums, k);
    //Assert
    expect(actual).toEqual(15);
  });
});

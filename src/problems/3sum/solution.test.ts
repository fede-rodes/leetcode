import { describe, it, expect } from "vitest";
import { threeSum } from "./solution";

describe("3 sum", () => {
  it("ex 1 ", () => {
    // Arrange
    const nums = [-5, -3, 0, 1, 2, 4, 5];
    const expected = [
      [-5, 0, 5],
      [-5, 1, 4],
      [-3, 1, 2],
    ];
    // Act
    const actual = threeSum(nums);
    // Assert
    expect(actual).toEqual(expected);
  });
});

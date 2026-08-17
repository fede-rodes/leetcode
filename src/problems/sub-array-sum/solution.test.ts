import { describe, it, expect } from "vitest";
import { subArrSum } from "./solution";

describe("sub array sum", () => {
  it("ex 1", () => {
    // Arrange
    const nums = [2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4];
    const target = 7;
    // const k = 3;
    // Act
    // const actual = subArrSum(nums, target, k);
    const actual = subArrSum(nums, target);
    // Assert
    // expect(actual).toEqual(5);
    expect(actual).toEqual([0, 2]);
  });
  it("ex 2", () => {
    // Arrange
    const nums = [2, 3, 8, 5, 3, 2, 4];
    const target = 7;
    // Act
    const actual = subArrSum(nums, target);
    // Assert
    expect(actual).toEqual([]);
  });
  it("ex 3", () => {
    // Arrange
    const nums = [0, 14, 8, 5, 0, 2, 4];
    const target = 13;
    // Act
    const actual = subArrSum(nums, target);
    // Assert
    expect(actual).toEqual([2, 3]);
  });
});

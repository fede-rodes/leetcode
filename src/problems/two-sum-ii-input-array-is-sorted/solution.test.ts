import { describe, it, expect } from "vitest";
import { twoSum } from "./solution";

describe("two sum ii input array is sorted", () => {
  it("ex 1", () => {
    // Arrange
    const numbers = [1, 3, 5, 7, 8];
    const target = 10;
    // Act
    const actual = twoSum(numbers, target);
    // Assert
    expect(actual).toEqual([2, 4]);
  });
  it("ex 2", () => {
    // Arrange
    const numbers = [-1, 1, 3, 5, 7, 8, 14];
    const target = 22;
    // Act
    const actual = twoSum(numbers, target);
    // Assert
    expect(actual).toEqual([6, 7]);
  });
});

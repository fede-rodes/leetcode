import { describe, it, expect } from "vitest";
import { maxProduct } from "./solution";

describe("max product sub array", () => {
  it("ex 1", () => {
    // Arrange
    const nums = [1, 4, 5, 2, -2, 20, -4];
    const k = 4;
    // Act
    const actual = maxProduct(nums, k);
    // Assert
    expect(actual).toEqual(320);
  });
  it("ex 2", () => {
    // Arrange
    const nums = [4, 2, 1, -9, 8, 2, 3];
    const k = 3;
    // Act
    const actual = maxProduct(nums, k);
    // Assert
    expect(actual).toEqual(48);
  });
});

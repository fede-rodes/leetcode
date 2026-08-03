import { describe, it, expect } from "vitest";
import { maxProfit } from "./solution";

describe("best time to buy and sell 2", () => {
  it("[7,2,1,3,5]", () => {
    // Arrange
    const nums = [7, 2, 1, 3, 5];
    // Act
    const actual = maxProfit(nums);
    // Assert
    expect(actual).toEqual(4);
  });
});

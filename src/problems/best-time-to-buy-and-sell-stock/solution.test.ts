import { describe, it, expect } from "vitest";
import { maxProfit } from "./solution";

describe("besst time to buy and sell stock", () => {
  it("[4,1,2,6,4]", () => {
    // Arrange
    const prices = [4, 1, 2, 6, 4];

    // Act
    const profit = maxProfit(prices);

    // Assert
    expect(profit).toEqual(5);
  });
  it("[4,3,2,1]", () => {
    // Arrange
    const prices = [4, 3, 2, 1];

    // Act
    const profit = maxProfit(prices);

    // Assert
    expect(profit).toEqual(0);
  });
});

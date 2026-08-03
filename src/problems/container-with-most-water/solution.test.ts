import { describe, it, expect } from "vitest";
import { maxArea } from "./solution";

describe("container with most water", () => {
  it("ex 1", () => {
    // Arrange
    const height = [0, 0, 0, 100, 100, 0, 0, 0];
    // Act
    const actual = maxArea(height);
    // Assert
    expect(actual).toEqual(100);
  });
  it("ex 2", () => {
    // Arrange
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    // Act
    const actual = maxArea(height);
    // Assert
    expect(actual).toEqual(49);
  });
  it("ex 3", () => {
    // Arrange
    const height = [10, 9, 8, 7, 6, 5, 4]; // 24, 25, 24,
    // Act
    const actual = maxArea(height);
    // Assert
    expect(actual).toEqual(25);
  });
});

import { describe, it, expect } from "vitest";
import { fibonacci } from "./solution";

describe("fibonacci", () => {
  it("works", () => {
    // Arrange
    const steps = 10;
    // Act
    const actual = fibonacci(steps);
    // Assert
    expect(actual.slice(0, 10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

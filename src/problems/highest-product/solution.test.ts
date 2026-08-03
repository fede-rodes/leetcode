import { describe, it, expect } from "vitest";
import { product } from "./solution";

describe("higest product", () => {
  it("[-5, -10, 0, 2, 3, 8]", () => {
    // Arrage
    const nums = [-5, -10, 0, 2, 3, 8];
    // Act
    const actual = product(nums);
    // Assert
    expect(actual).toEqual(400);
  });
  it("[-2, -1, 0, 2, 3, 8]", () => {
    // Arrage
    const nums = [-2, -1, 0, 2, 3, 8];
    // Act
    const actual = product(nums);
    // Assert
    expect(actual).toEqual(48);
  });
});

import { describe, it, expect } from "vitest";
import { isSubsequence } from "./solution";

describe("Is subsequence", () => {
  it("ex 1", () => {
    // Arrange
    const t = "akjfeo";
    const s = "keo";
    // Act
    const actual = isSubsequence(s, t);
    // Assert
    expect(actual).toBeTruthy();
  });
  it("ex 2", () => {
    // Arrange
    const t = "akjfeo";
    const s = "kfj";
    // Act
    const actual = isSubsequence(s, t);
    // Assert
    expect(actual).toBeFalsy();
  });
});

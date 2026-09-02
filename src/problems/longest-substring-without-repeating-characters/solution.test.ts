import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "./solution";

describe("length of longest substring", () => {
  it("ex 1", () => {
    // Arrange
    const s = "abcabcbb";
    // Act
    const actual = lengthOfLongestSubstring(s);
    // Assert
    expect(actual).toEqual(3);
  });
  it("ex 2", () => {
    // Arrange
    const s = "bbbbb";
    // Act
    const actual = lengthOfLongestSubstring(s);
    // Assert
    expect(actual).toEqual(1);
  });
  it("ex 3", () => {
    // Arrange
    const s = "pwwkew";
    // Act
    const actual = lengthOfLongestSubstring(s);
    // Assert
    expect(actual).toEqual(3);
  });
});

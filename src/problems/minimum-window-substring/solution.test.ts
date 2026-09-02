import { describe, it, expect } from "vitest";
import { minWindow } from "./solution";
// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

describe("Minimum window substring", () => {
  it("ex 1", () => {
    // Arrange
    const s = "ADOBECODEBANC";
    const t = "ABC";
    // Act
    const actual = minWindow(s, t);
    // Assert
    expect(actual).toEqual("BANC");
  });
  it("ex 2", () => {
    // Arrange
    const s = "a";
    const t = "a";
    // Act
    const actual = minWindow(s, t);
    // Assert
    expect(actual).toEqual("a");
  });
  it("ex 3", () => {
    // Arrange
    const s = "a";
    const t = "aa";
    // Act
    const actual = minWindow(s, t);
    // Assert
    expect(actual).toEqual("");
  });
  it("ex 4", () => {
    // Arrange
    const s = "mam";
    const t = "a";
    // Act
    const actual = minWindow(s, t);
    // Assert
    expect(actual).toEqual("a");
  });
});

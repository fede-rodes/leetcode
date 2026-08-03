import { describe, it, expect } from "vitest";
import { hasSubstringAnagram } from "./solution";

describe("sub array anagram", () => {
  it("ex 1", () => {
    // Arrange
    const str = "aseoimrhaidj";
    const sub = "rim";
    // Act
    const actual = hasSubstringAnagram(str, sub);
    // Assert
    expect(actual).toBeTruthy();
  });
  it("ex 2", () => {
    // Arrange
    const str = "aheoimrhaidj";
    const sub = "iah";
    // Act
    const actual = hasSubstringAnagram(str, sub);
    // Assert
    expect(actual).toBeTruthy();
  });
  it("ex 3", () => {
    // Arrange
    const str = "iiiiiiii";
    const sub = "iah";
    // Act
    const actual = hasSubstringAnagram(str, sub);
    // Assert
    expect(actual).toBeFalsy();
  });
  it("ex 4", () => {
    // Arrange
    const str = "abcc";
    const sub = "abcd";
    // Act
    const actual = hasSubstringAnagram(str, sub);
    // Assert
    expect(actual).toBeFalsy();
  });
});

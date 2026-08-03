import { describe, it, expect } from "vitest";
import { isPalindrome } from "./solution";

describe("valid palindrome", () => {
  it.skip("A man, a plan, a canal: Panama", () => {
    // Arrange
    const s = "A man, a plan, a canal: Panama";
    // Act
    const actual = isPalindrome(s);
    // Assert
    expect(actual).toBeTruthy();
  });
  it.skip("ana", () => {
    // Arrange
    const s = "ana";
    // Act
    const actual = isPalindrome(s);
    // Assert
    expect(actual).toBeTruthy();
  });
  it.skip("anna", () => {
    // Arrange
    const s = "anna";
    // Act
    const actual = isPalindrome(s);
    // Assert
    expect(actual).toBeTruthy();
  });
  it("race a car", () => {
    // Arrange
    const s = "race a car"; // "raceacar"
    // Act
    const actual = isPalindrome(s);
    // Assert
    expect(actual).toBeFalsy();
  });
});

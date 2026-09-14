import { describe, it, expect } from "vitest";
import { lengthOfLastWord } from "./solution";

describe("length of last word", () => {
  it("ex 1", () => {
    // Arrange
    const s = "Hello World";
    // Act
    const actual = lengthOfLastWord(s);
    // Assert
    expect(actual).toEqual(5);
  });
  it("ex 2", () => {
    // Arrange
    const s = "   fly me   to   the moon  ";
    // Act
    const actual = lengthOfLastWord(s);
    // Assert
    expect(actual).toEqual(4);
  });
});

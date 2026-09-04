import { describe, it, expect } from "vitest";
import { romanToInt } from "./solution";

describe("roman to integer", () => {
  it("ex 1", () => {
    // Arrange
    const s = "XV";

    // Act
    const actual = romanToInt(s);

    // Assert
    expect(actual).toEqual(15);
  });
  it("ex 2", () => {
    // Arrange
    const s = "XIV";

    // Act
    const actual = romanToInt(s);

    // Assert
    expect(actual).toEqual(14);
  });
});

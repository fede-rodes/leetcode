import { describe, it, expect } from "vitest";
import { type Grid, islandCount } from "./solution";

describe("island count", () => {
  it("", () => {
    // Arrange
    const grid: Grid = [
      ["W", "L", "W", "W", "W"],
      ["W", "L", "W", "W", "W"],
      ["W", "W", "W", "L", "W"],
      ["W", "W", "L", "L", "W"],
      ["L", "L", "W", "W", "W"],
    ];
    // Act
    const actual = islandCount(grid);
    // Assert
    expect(actual).toEqual(3);
  });
});

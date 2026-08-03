import { describe, it, expect } from "vitest";
import { calcEquation, type Edges } from "./solution";

describe("evaluate division", () => {
  it("", () => {
    // Arrange
    const equations: Edges = [
      ["a", "b"],
      ["b", "c"],
    ];
    const values = [2.0, 3.0];
    const queries: [string, string][] = [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ];
    const expected = [6.0, 0.5, -1.0, 1.0, -1.0];
    // Act
    const actual = calcEquation(equations, values, queries);
    // Assert
    expect(actual).toEqual(expected);
  });
});

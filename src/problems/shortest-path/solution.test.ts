import { describe, it, expect } from "vitest";
import { type Edges, type Graph, buildGraph, shortest } from "./solution";

describe.skip("build graph", () => {
  it("", () => {
    // Arrange
    const edges: Edges = [
      ["1", "2"],
      ["1", "3"],
      ["2", "5"],
      ["4", "6"],
      ["4", "7"],
      ["4", "8"],
      ["5", "9"],
    ];
    const graph: Graph = {
      1: ["2", "3"],
      2: ["1", "5"],
      3: ["1"],
      4: ["6", "7", "8"],
      5: ["2", "9"],
      6: ["4"],
      7: ["4"],
      8: ["4"],
      9: ["5"],
    };
    // Act
    const actual = buildGraph(edges);
    // Assert
    expect(actual).toEqual(graph);
  });
});

describe("shortest path", () => {
  it("", () => {
    // Arrange
    const edges: Edges = [
      ["1", "2"],
      ["1", "3"],
      ["2", "5"],
      ["4", "6"],
      ["4", "7"],
      ["4", "8"],
      ["5", "9"],
    ];
    // Act
    const actual = shortest(edges, "1", "9");
    // Assert
    expect(actual).toEqual(3);
  });
});

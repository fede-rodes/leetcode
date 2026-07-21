import {describe, it, expect} from "vitest"
import { largest, type Graph } from "./solution"

describe("largest component", () => {
  it("", () => {
    // Arrange
    const graph: Graph = {
      1: ["2","3"],
      2: ["5"],
      3: [],
      4: ["6","7","8"],
      5: ["9","2"],
      6: [],
      7: [],
      8: [],
      9: []
    }
    // Act
    const actual = largest(graph);
    // Assert
    expect(actual).toEqual(5)
  })
})

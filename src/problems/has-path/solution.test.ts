import {describe, it, expect} from "vitest"
import { hasPath } from "./solution"

describe("has path", () => {
  it("ex 1", () => {
    // Arrange
    const graph = {
      f: ["g", "i"],
      g: ["h"],
      h: [],
      i: ["g", "k"],
      j: ["i"],
      k: [],
    }
    // Act
    const actual = hasPath(graph, "f", "k")
    // Assert
    expect(actual).toBeTruthy();
  })
  it("ex 2", () => {
    // Arrange
    const graph = {
      f: ["g", "i"],
      g: ["h"],
      h: [],
      i: ["g", "k"],
      j: ["i"],
      k: [],
    }
    // Act
    const actual = hasPath(graph, "j", "f")
    // Assert
    expect(actual).toBeFalsy();
  })
})

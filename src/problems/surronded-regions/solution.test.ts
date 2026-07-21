import {describe, it, expect} from "vitest"
import { buildEdges, solve } from "./solution"

describe("surrounded regions", () => {
  it("", () => {
    // Arrange
    const board = [
      ["X","X","X","X"],
      ["X","O","O","X"],
      ["X","X","O","X"],
      ["X","O","X","X"]
    ]

    const expected = [
      ["X","X","X","X"],
      ["X","X","X","X"],
      ["X","X","X","X"],
      ["X","O","X","X"]
    ]
    // Act
    solve(board);
    // Assert
    expect(board).toEqual(expected);
  })
})

describe.skip("buildEdges", () => {
  it("ex 1", () => {
    // Arrange
    const board = [
      ["X","X","X","X"],
      ["X","O","O","X"],
      ["X","X","O","X"],
      ["X","O","X","X"]
    ]
    const expected = [
      ["1_1", "1_1"],
      ["1_1", "1_2"],
      ["1_2", "1_2"],
      ["1_2", "2_2"],
      ["2_2", "2_2"],
      ["3_1", "3_1"],
    ]
    // Act
    const actual = buildEdges(board);
    // Assert
    expect(actual).toEqual(expected);
  })
})

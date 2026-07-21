import {describe, it, expect} from "vitest"
import {dfs, type T} from "./solution"

describe("dfs", () => {
  it("case 1", () => {
    // Arrange
    const g: Record<T, T[]> = {
      a: ['b', 'c'],
      b: ['d'],
      c: ['e'],
      d: ['c'],
      e: [],
      f: ['e'],
    }

    const arr: T[] = [];

    function cb(n: T) {
      if (!arr.includes(n)) {
        arr.push(n);
      }
    }

    // Act
    dfs(g, 'a', cb);

    // Assert
    expect(arr).toEqual(['a','c','e','b','d'])
  })
})

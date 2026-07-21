import {describe, it, expect} from "vitest"
import {bfs, type T} from "./solution"

describe("bfs", () => {
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
    bfs(g, 'a', cb);

    // Assert
    expect(arr).toEqual(['a','b','c','d', 'e'])
  })
})

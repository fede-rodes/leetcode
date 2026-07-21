import {describe, it, expect} from "vitest"
import {i2d} from "./solution"

describe("i2d", () => {
  it("", () => {
    const edges: [string,string][] = [['i', 'j'], ['j', 'k'], ['l', 'i']]
    const expected = {
      i: ['j', 'l'],
      j: ['i', 'k'],
      k: ['j'],
      l: ['i']
    }
    const actual = i2d(edges)
    expect(actual).toEqual(expected)
  })
})

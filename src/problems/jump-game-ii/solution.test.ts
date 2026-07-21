import { describe, it, expect } from "vitest";
import { calcSubArr, jump } from "./solution"

describe.skip("calc sub arr", () => {
  it("0, 0, [2,1,3,4,5]", () => {
    // Arrange
    const l = 0;
    const r = 0;
    const nums = [2,1,3,4,5]
    // Act
    const actual = calcSubArr(l,r,nums);
    // Assert
    expect(actual[0]).toEqual(1) // index
    expect(actual[1]).toEqual(2) // index
  })
})

describe("can jump 2", () => {
  it.skip("[5,5,5,5]", () => {
    // Arrange
    const nums = [5,5,5,5]

    // Act
    const actual = jump(nums)

    // Assert
    expect(actual).toEqual(1)
  })
  it.skip("[3,3,3,3,3,3]", () => {
    // Arrange
    const nums = [3,3,3,3,3,3]

    // Act
    const actual = jump(nums)

    // Assert
    expect(actual).toEqual(2)
  })
  it.skip("[5,5,5,5]", () => {
    // Arrange
    const nums = [5,5,5,5]

    // Act
    const actual = jump(nums)

    // Assert
    expect(actual).toEqual(1)
  })
  it("[2,3,1,1,4]", () => {
    // Arrange
    const nums = [2,3,1,1,4]

    // Act
    const actual = jump(nums)

    // Assert
    expect(actual).toEqual(2)
  })
})

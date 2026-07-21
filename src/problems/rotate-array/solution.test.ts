import {describe, it, expect} from "vitest"
import { rotate } from "./solution"

describe("rotate array", () => {
  it.skip("[1,2,3,4,5], k = 1", () => {
    // Arrange
    const nums = [1,2,3,4,5] // slice(0, length - k) -> [k, ..., length - 1]
    const k = 1

    // Act
    rotate(nums, k)

    // Assert
    // [5,1,2,3,4]
    expect(nums[0]).toEqual(5)
    expect(nums[1]).toEqual(1)
    expect(nums[2]).toEqual(2)
    expect(nums[3]).toEqual(3)
    expect(nums[4]).toEqual(4)
  })

  it("[1,2,3,4,5], k = 3", () => {
    // Arrange
    const nums = [1,2,3,4,5] // slice(0, length - k) -> [k, ..., length - 1]
    const k = 3

    // Act
    rotate(nums, k)

    // Assert
    // [3,4,5,1,2]
    expect(nums[0]).toEqual(3)
    expect(nums[1]).toEqual(4)
    expect(nums[2]).toEqual(5)
    expect(nums[3]).toEqual(1)
    expect(nums[4]).toEqual(2)
  })

  it.skip("[1], k = 0", () => {
    // Arrange
    const nums = [1] // slice(0, length - k) -> [k, ..., length - 1]
    const k = 0

    // Act
    rotate(nums, k)

    // Assert
    expect(nums[0]).toEqual(1)
    expect(nums.length).toEqual(1)
  })
})

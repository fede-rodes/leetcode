import { describe, it, expect } from "vitest";
import { productExceptSelf} from "./solution"

describe("product of array except self", () => {
  it("[0,0,1,2,3]", () => {
    // Arrange
    const nums = [0,0,1,2,3]
    // Act
    const actual = productExceptSelf(nums)
    // Assert
    expect(actual).toEqual([0,0,0,0,0])
  })
  it("[0,1,2,3]", () => {
    // Arrange
    const nums = [0,1,2,3]
    // Act
    const actual = productExceptSelf(nums)
    // Assert
    expect(actual).toEqual([6,0,0,0])
  })
  it("[1,2,3]", () => {
    // Arrange
    const nums = [1,2,3]
    // Act
    const actual = productExceptSelf(nums)
    // Assert
    expect(actual).toEqual([6,3,2])
  })
})

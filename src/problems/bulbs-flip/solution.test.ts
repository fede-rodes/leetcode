
import { describe, it, expect } from "vitest";
import { flip } from "./solution";

describe("bulbs flip", () => {
  it("[0,1,1,0]", () => {
    // Arrange
    const nums = [0,1,1,0]

    // Act
    const actual = flip(nums)

    // Assert
    expect(actual).toEqual(3)
  })
  it("[1,1,1,1]", () => {
    // Arrange
    const nums = [1,1,1,1]

    // Act
    const actual = flip(nums)

    // Assert
    expect(actual).toEqual(0)
  })
  it("[0,1,1,1]", () => {
    // Arrange
    const nums = [0,1,1,1]

    // Act
    const actual = flip(nums)

    // Assert
    expect(actual).toEqual(2)
  })
})

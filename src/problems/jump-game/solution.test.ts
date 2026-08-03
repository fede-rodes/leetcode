import { describe, it, expect } from "vitest";
import { canJump } from "./solution";

describe("can jump", () => {
  it("[3,2,5,4]", () => {
    // Arrange
    const nums = [3, 2, 5, 4];

    // Act
    const actual = canJump(nums);

    // Assert
    expect(actual).toBeTruthy();
  });
  it("[3,2,1,0,3]", () => {
    // Arrange
    const nums = [3, 2, 1, 0, 3];

    // Act
    const actual = canJump(nums);

    // Assert
    expect(actual).toBeFalsy();
  });
  it("[0]", () => {
    // Arrange
    const nums = [0];

    // Act
    const actual = canJump(nums);

    // Assert
    expect(actual).toBeTruthy();
  });
  it("[0,1]", () => {
    // Arrange
    const nums = [0, 1];

    // Act
    const actual = canJump(nums);

    // Assert
    expect(actual).toBeFalsy();
  });
  it("[6,4,1,0,0,0,1]", () => {
    // Arrange
    const nums = [6, 4, 1, 0, 0, 0, 1];

    // Act
    const actual = canJump(nums);

    // Assert
    expect(actual).toBeTruthy();
  });
  it("[6,4,1,0,0,0]", () => {
    // Arrange
    const nums = [6, 4, 1, 0, 0, 0];

    // Act
    const actual = canJump(nums);

    // Assert
    expect(actual).toBeTruthy();
  });
  it("[100,0,1,1,0,0,0]", () => {
    // Arrange
    const nums = [100, 0, 1, 1, 0, 0, 0];

    // Act
    const actual = canJump(nums);

    // Assert
    expect(actual).toBeTruthy();
  });
});

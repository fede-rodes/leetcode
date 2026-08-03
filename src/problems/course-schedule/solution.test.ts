import { describe, it, expect } from "vitest";
import { canFinish } from "./solution";

describe("course schedule", () => {
  it.skip("ex 1", () => {
    // Arrange
    const numCourses = 2;
    const prerequisites: [number, number][] = [[1, 0]];
    // Act
    const actual = canFinish(numCourses, prerequisites);
    // Assert
    expect(actual).toBeTruthy();
  });
  it.skip("ex 2", () => {
    // Arrange
    const numCourses = 2;
    const prerequisites: [number, number][] = [
      [1, 0],
      [0, 1],
    ];
    // Act
    const actual = canFinish(numCourses, prerequisites);
    // Assert
    expect(actual).toBeFalsy();
  });
  it.skip("ex 3", () => {
    // Arrange
    const numCourses = 1;
    const prerequisites: [number, number][] = [];
    // Act
    const actual = canFinish(numCourses, prerequisites);
    // Assert
    expect(actual).toBeTruthy();
  });
  it.skip("ex 4", () => {
    // Arrange
    const numCourses = 5;
    const prerequisites: [number, number][] = [
      [1, 4],
      [2, 4],
      [3, 1],
      [3, 2],
    ];
    // Act
    const actual = canFinish(numCourses, prerequisites);
    // Assert
    expect(actual).toBeTruthy();
  });
  it("ex 5", () => {
    // Arrange
    const numCourses = 5;
    const prerequisites: [number, number][] = [
      [0, 1],
      [0, 2],
      [1, 2],
    ];
    // Act
    const actual = canFinish(numCourses, prerequisites);
    // Assert
    expect(actual).toBeTruthy();
  });
});

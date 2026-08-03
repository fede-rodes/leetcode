import { describe, it, expect } from "vitest";
import { climbStairs } from "./solution";

describe.skip("climb stairs", () => {
  it("n = 1", () => {
    // Arrange
    const n = 1;
    // [1]
    // Act
    const actual = climbStairs(n);
    // Assert
    expect(actual).toEqual(1);
  });
  it("n = 2", () => {
    // Arrange
    const n = 2;
    // [1,1]
    // [2]
    // Act
    const actual = climbStairs(n);
    // Assert
    expect(actual).toEqual(2);
  });
  it("n = 3", () => {
    // Arrange
    const n = 3;
    // [1,1,1]
    // [2,1]
    // [1,2]
    // Act
    const actual = climbStairs(n);
    // Assert
    expect(actual).toEqual(3);
  });
  it("n = 4", () => {
    // Arrange
    const n = 4;
    // [1,1,1,1]
    // [2,1,1]
    // [1,2,1]
    // [1,1,2]
    // [2,2] -> n / 2 elements (min number of elements the solution array can contain)
    // Act
    const actual = climbStairs(n);
    // Assert
    expect(actual).toEqual(5);
  });
  it("n = 5", () => {
    // Arrange
    const n = 5;
    // [1,1,1,1,1] -> all 1's                  (1)
    // [2,1,1,1] -> one 2's and the rest 1's   (n-1)
    // [1,2,1,1]
    // [1,1,2,1]
    // [1,1,1,2]
    // [2,2,1] -> two 2's and the rest ones (n-2)
    // [2,1,2]
    // [1,2,2]
    // min number of elements ceil(n / 2)
    // Act
    const actual = climbStairs(n);
    // Assert
    expect(actual).toEqual(8);
  });
  it("n = 6", () => {
    // Arrange
    const n = 6;
    // [1,1,1,1,1,1] -> all 1's                  (1)
    // [2,1,1,1,1] -> one 2's and the rest 1's   (n-1)
    // [1,2,1,1,1]
    // [1,1,2,1,1]
    // [1,1,1,2,1]
    // [1,1,1,1,2] #climbStairs(n-1) + 1
    // [2,2,1,1] -> two 2's and the rest ones (n-2)
    // [2,1,2,1]
    // [1,2,2,1]
    // [1,2,1,2] + 2
    // [1,1,2,2]
    // [2,2,2] + 1
    // min number of elements ceil(n / 2)
    // Act
    const actual = climbStairs(n);
    // Assert
    expect(actual).toEqual(12);
  });
});

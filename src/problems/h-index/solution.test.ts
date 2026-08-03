import { describe, it, expect } from "vitest";
import { hIndex } from "./solution";

// The h-index is defined as the maximum value of h such that the given researcher
// has published at least h papers that have each been cited at least h times.
describe("h index", () => {
  it("[3,2,0,4,1]", () => {
    // h = 1? -> 1 paper cites at least once yes
    // h = 2? -> 2 papers cites at least twice yes
    // h = 3? -> 3 papers cited at least 3 times no
    // Arrange
    const citations = [3, 2, 0, 4, 1];
    // Act
    const actual = hIndex(citations);
    // Assert
    expect(actual).toEqual(2);
  });
  it.skip("[3,0,6,1,5]", () => {
    // Arrange
    const citations = [3, 0, 6, 1, 5];
    // Act
    const actual = hIndex(citations);
    // Assert
    expect(actual).toEqual(3);
  });
  it.skip("[100]", () => {
    // Arrange
    const citations = [100];
    // Act
    const actual = hIndex(citations);
    // Assert
    expect(actual).toEqual(1);
  });
  it.skip("[3,3,3,4]", () => {
    // Arrange
    const citations = [3, 3, 3, 4];
    // Act
    const actual = hIndex(citations);
    // Assert
    expect(actual).toEqual(3);
  });
});

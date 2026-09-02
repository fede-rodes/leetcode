import { describe, it, expect } from "vitest";
import { LinkNode, linkedListSum, linkedListSumRec } from "./solution";

describe("linked list sum", () => {
  it("ex 1", () => {
    // Arrange
    const a = new LinkNode(2);
    const b = new LinkNode(8);
    const c = new LinkNode(3);
    const d = new LinkNode(7);
    a.next = b;
    b.next = c;
    c.next = d;
    // Act
    const actual = linkedListSum(a);
    // Assert
    expect(actual).toEqual(20);
  });
  it("ex 2", () => {
    // Arrange
    const a = new LinkNode(2);
    const b = new LinkNode(8);
    const c = new LinkNode(3);
    const d = new LinkNode(7);
    a.next = b;
    b.next = c;
    c.next = d;
    // Act
    const actual = linkedListSumRec(a);
    // Assert
    expect(actual).toEqual(20);
  });
});

import { describe, it, expect } from "vitest";
import { ListNode, hasCycle } from "./solution";

describe("linked list cycle", () => {
  it("ex 1", () => {
    // Arrange
    const a = new ListNode(1);
    const b = new ListNode(2);
    const c = new ListNode(3);
    const d = new ListNode(4);
    a.next = b;
    b.next = c;
    c.next = d;
    // Act
    const actual = hasCycle(a);
    // Assert
    expect(actual).toBeTruthy();
  });
});

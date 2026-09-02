import { describe, it, expect } from "vitest";
import { ListNode, reverseLinkedList } from "./solution";

describe("reverse linked list", () => {
  it("ex 1", () => {
    // Arrange
    const a = new ListNode("A");
    const b = new ListNode("B");
    const c = new ListNode("C");
    const d = new ListNode("D");

    a.next = b;
    b.next = c;
    c.next = d;

    // Act
    const actual = reverseLinkedList(a);

    // Assert
    expect(actual.val).toEqual("D");
    expect(actual.next!.val).toEqual("C");
    expect(actual.next!.next!.val).toEqual("B");
    expect(actual.next!.next!.next!.val).toEqual("A");
    expect(actual.next!.next!.next!.next).toBeNull();
  });
});

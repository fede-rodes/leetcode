import { describe, it, expect } from "vitest";
import { ListNode, linkedListArr, linkedListArrRec } from "./solution";

describe("linked list array", () => {
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
    const actual = linkedListArr(a);
    // Assert
    expect(actual).toEqual([1, 2, 3, 4]);
  });
  it("ex 2", () => {
    // Arrange
    const arr: number[] = [];
    const a = new ListNode(1);
    const b = new ListNode(2);
    const c = new ListNode(3);
    const d = new ListNode(4);
    a.next = b;
    b.next = c;
    c.next = d;
    // Act
    linkedListArrRec(a, arr);
    // Assert
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

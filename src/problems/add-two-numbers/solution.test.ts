import { describe, it, expect } from "vitest";
import { ListNode, addTwoNumbers, arrToLL } from "./solution";

describe.skip("arr to linked list", () => {
  it("ex 1", () => {
    // Arrange
    const l = [2, 4, 3];
    // const a1 = new ListNode(2);
    // const b1 = new ListNode(4);
    // const c1 = new ListNode(3);

    // a1.next = b1;
    // b1.next = c1;

    // const a2 = new ListNode(5);
    // const b2 = new ListNode(6);
    // const c2 = new ListNode(4);

    // a2.next = b2;
    // b2.next = c2;

    // Act
    const actual = arrToLL(l);

    // Assert
    expect(actual!.val).toEqual(2);
    expect(actual!.next!.val).toEqual(4);
    expect(actual!.next!.next!.val).toEqual(3);
  });
});
describe("add two numbers", () => {
  it("ex 1", () => {
    // Arrange
    const l1 = [2, 4, 3];
    const l2 = [5, 6, 4];

    const head1 = arrToLL(l1);
    const head2 = arrToLL(l2);

    // Act
    const actual = addTwoNumbers(head1, head2);

    // Assert
    expect(actual!.val).toEqual(7);
    expect(actual!.next!.val).toEqual(0);
    expect(actual!.next!.next!.val).toEqual(8);
  });
  it("ex 2", () => {
    // Arrange
    const l1 = [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    ];
    const l2 = [5, 6, 4];

    const head1 = arrToLL(l1);
    const head2 = arrToLL(l2);

    const expected = [
      6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    ];

    // Act
    const actual = addTwoNumbers(head1, head2);

    // Assert
    let cur: ListNode | null = actual;
    let index = 0;

    while (cur !== null) {
      expect(cur.val).toEqual(expected[index]);
      cur = cur.next;
      index++;
    }
    // expect(actual!.val).toEqual(7);
    // expect(actual!.next!.val).toEqual(0);
    // expect(actual!.next!.next!.val).toEqual(8);
  });
});

import { describe, it, expect } from "vitest";
import { ListNode, mergeTwoLists, arrToLL } from "./solution";

describe("arr to ll", () => {
  it("ex 1", () => {
    // Arrange
    const l1 = [1, 2, 4];

    // Act
    const actual = arrToLL(l1);

    // Assert
    expect(actual!.val).toEqual(1);
    expect(actual!.next!.val).toEqual(2);
    expect(actual!.next!.next!.val).toEqual(4);
  });
});

describe("merge two sorted lists", () => {
  it("ex 1", () => {
    // Arrange
    const h1 = arrToLL([1, 2, 4]);
    const h2 = arrToLL([1, 3, 4]);

    const expected = [1, 1, 2, 3, 4, 4];

    // Act
    const actual = mergeTwoLists(h1, h2);

    // Assert
    let cur = actual;

    expected.forEach((val) => {
      expect(cur!.val).toEqual(val);
      cur = cur!.next;
    });
  });
});

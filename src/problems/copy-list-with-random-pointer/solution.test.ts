import { describe, it, expect } from "vitest";
import { _Node, copyRandomList, arrToLL } from "./solution";

describe.skip("array to linked list", () => {
  it("ex 1", () => {
    // Arrange
    const list: [number, number | null][] = [
      [7, null],
      [13, 0],
      [11, 4],
      [10, 2],
      [1, 0],
    ];

    // Act
    const actual = arrToLL(list);

    // Assert
    expect(actual!.val).toEqual(7);
    expect(actual!.random).toBeNull();
    expect(actual!.next!.val).toEqual(13);
    expect(actual!.next!.random!.val).toEqual(7);
    expect(actual!.next!.next!.val).toEqual(11);
    expect(actual!.next!.next!.random!.val).toEqual(1);
    expect(actual!.next!.next!.next!.val).toEqual(10);
    expect(actual!.next!.next!.next!.random!.val).toEqual(11);
    expect(actual!.next!.next!.next!.next!.val).toEqual(1);
    expect(actual!.next!.next!.next!.next!.random!.val).toEqual(7);
  });
});

describe("copy list with random pointer", () => {
  it("ex 1", () => {
    // Arrange
    const list: [number, number | null][] = [
      [7, null],
      [13, 0],
      [11, 4],
      [10, 2],
      [1, 0],
    ];
    const head = arrToLL(list);

    // Act
    const actual = copyRandomList(head);

    // Assert
    expect(actual!.val).toEqual(7);
    expect(actual!.next!.val).toEqual(13);
    expect(actual!.random).toBeNull();
  });
});

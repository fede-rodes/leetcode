import { describe, it, expect } from "vitest";
import { ListNode, getNodeValue, getNodeValueRec } from "./solution";

describe("get node value", () => {
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
    const actual = getNodeValue(a, 3);

    // Assert
    expect(actual).toEqual("D");
  });
  it("ex 2", () => {
    // Arrange
    const a = new ListNode("A");
    const b = new ListNode("B");
    const c = new ListNode("C");
    const d = new ListNode("D");

    a.next = b;
    b.next = c;
    c.next = d;

    // Act
    const actual = getNodeValue(a, 4);

    // Assert
    expect(actual).toBeNull();
  });
});

describe("get node value rec", () => {
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
    const actual = getNodeValueRec(a, 3);

    // Assert
    expect(actual).toEqual("D");
  });
  it("ex 2", () => {
    // Arrange
    const a = new ListNode("A");
    const b = new ListNode("B");
    const c = new ListNode("C");
    const d = new ListNode("D");

    a.next = b;
    b.next = c;
    c.next = d;

    // Act
    const actual = getNodeValueRec(a, 4);

    // Assert
    expect(actual).toBeNull();
  });
});

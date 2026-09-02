import { describe, it, expect } from "vitest";
import { LinkNode, linkedListTarget, linkedListTargetRec } from "./solution";

describe("linked list target", () => {
  it("ex 1", () => {
    // Arrange
    const d = new LinkNode("D");
    const c = new LinkNode("C", d);
    const b = new LinkNode("B", c);
    const a = new LinkNode("A", b);

    const target = "C";

    // Act
    const actual = linkedListTarget(a, target);

    // Assert
    expect(actual).toBeTruthy();
  });
  it("ex 2", () => {
    // Arrange
    const d = new LinkNode("D");
    const c = new LinkNode("C", d);
    const b = new LinkNode("B", c);
    const a = new LinkNode("A", b);

    const target = "H";

    // Act
    const actual = linkedListTarget(a, target);

    // Assert
    expect(actual).toBeFalsy();
  });
});

describe("linked list target rec", () => {
  it("ex 1", () => {
    // Arrange
    const d = new LinkNode("D");
    const c = new LinkNode("C", d);
    const b = new LinkNode("B", c);
    const a = new LinkNode("A", b);

    const target = "C";

    // Act
    const actual = linkedListTargetRec(a, target);

    // Assert
    expect(actual).toBeTruthy();
  });
  it("ex 2", () => {
    // Arrange
    const d = new LinkNode("D");
    const c = new LinkNode("C", d);
    const b = new LinkNode("B", c);
    const a = new LinkNode("A", b);

    const target = "H";

    // Act
    const actual = linkedListTargetRec(a, target);

    // Assert
    expect(actual).toBeFalsy();
  });
});

import { describe, it, expect } from "vitest";
import { majorityElement } from "./solution";

describe("majority element", () => {
  it("[1,2,2,3,2]", () => {
    const nums = [1, 2, 2, 3, 2];

    const actual = majorityElement(nums);

    expect(actual).toEqual(2);
  });
});

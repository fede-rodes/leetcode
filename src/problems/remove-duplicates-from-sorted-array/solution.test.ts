import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./solution";

describe("remove duplicates from sorted array", () => {
  it("[1,1,2]", () => {
    const nums: number[] = [1,1,2]

    const actual = removeDuplicates(nums);

    expect(actual).toEqual(2);
    expect(nums[0]).toEqual(1)
    expect(nums[1]).toEqual(2)
  })
})

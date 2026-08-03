import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./solution";

describe("remove duplicates from sorted array 2", () => {
  it.skip("[1,1,1,2,2,3]", () => {
    const nums = [1, 1, 1, 2, 2, 3];

    const k = removeDuplicates(nums);

    expect(k).toEqual(5);
    expect(nums[0]).toEqual(1);
    expect(nums[1]).toEqual(1);
    expect(nums[2]).toEqual(2);
    expect(nums[3]).toEqual(2);
    expect(nums[4]).toEqual(3);
  });

  it("[1,1,1,1,1,3]", () => {
    const nums = [1, 1, 1, 1, 1, 3];

    const k = removeDuplicates(nums);

    expect(k).toEqual(3);
    expect(nums[0]).toEqual(1);
    expect(nums[1]).toEqual(1);
    expect(nums[2]).toEqual(3);
  });
});

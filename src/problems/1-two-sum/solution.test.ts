import { describe, expect, it } from "vitest";
import { merge } from "./solution";

describe("merge", () => {
  it.skip("returns indices for sample 1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
  it("returns indices for sample 2", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });
});

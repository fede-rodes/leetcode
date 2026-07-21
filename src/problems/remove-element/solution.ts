export function removeElement(nums: number[], val: number): number {
  const filtered = nums.filter(num => num !== val);
  const { length } = nums;

  for (let i = 0; i < length; i++) {
    nums[i] = filtered[i]
  }

  return filtered.length;
};

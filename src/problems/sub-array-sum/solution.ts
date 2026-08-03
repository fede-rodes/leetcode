export function subArrSum(nums: number[], target: number, k: number): number {
  // Sliding window
  let sum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
  let count = sum === target ? 1 : 0; // number of sub arrays of length k that sum up to target

  for (let l = 0; l < nums.length - k; l++) {
    sum = sum - nums[l] + nums[l + k];
    if (sum === target) count++;
  }

  return count;
}

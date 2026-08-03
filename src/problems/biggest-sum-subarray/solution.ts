// Find the subarray of length k such that the sum of the elements is
// maximum

export function biggestSumSubArr(nums: number[], k: number): number {
  // I'll like to implement a sliding window approach with a window of size k
  let l = 0;
  let sum = nums.slice(l, l + k).reduce((acc, val) => acc + val, 0);
  let maxSum = sum;

  while (l < nums.length - k - 1) {
    sum -= nums[l];
    l++;
    sum += nums[l + k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

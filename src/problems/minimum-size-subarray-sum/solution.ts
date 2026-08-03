// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is greater than or equal to
// target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

export function minSubArrayLen(target: number, nums: number[]): number {
  // We'll traverse the array from left to right using 2 pointers.
  // The 2 pointers will start at position 0
  // we will move the right pointer to the right while the sum of the values
  // is less than the target. Once we reach the target we start moving the
  // left pointer forward to find anoother subarray which sum meets the target
  let l = 0;
  let r = nums.length - 1;
  let sum = nums.reduce((acc, val) => acc + val, 0);
  let minLen = 0;

  while (sum >= target) {
    minLen = r + 1 - l;

    if (sum - nums[l] < sum - nums[r]) {
      sum -= nums[l];
      l++;
    } else {
      sum -= nums[r];
      r--;
    }
  }

  return minLen;
}

// export function minSubArrayLen(target: number, nums: number[]): number {
//   // We'll traverse the array from left to right using 2 pointers.
//   // The 2 pointers will start at position 0
//   // we will move the right pointer to the right while the sum of the values
//   // is less than the target. Once we reach the target we start moving the
//   // left pointer forward to find anoother subarray which sum meets the target
//   let l = 0;
//   let r = 0;
//   let minLen = 0;

//   while (l < nums.length) {
//     const sum = nums.slice(l, r + 1).reduce((acc, val) => acc + val, 0);

//     if (sum >= target) {
//       const subArrLen = r + 1 - l;
//       minLen = minLen === 0 ? subArrLen : Math.min(minLen, subArrLen);
//       l++;
//       r = l;
//     } else if (r === nums.length - 1) {
//       break;
//     } else {
//       r++;
//     }
//   }

//   return minLen;
// }

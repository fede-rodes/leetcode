// Find a subarray for which the sum of all the element equals the target sum
// Return the size of the subarray
export function subArrSum(nums: number[], target: number): [number, number] | [] {
  const k = nums.length;

  // We have a window defined by two points. Both start at index zero
  let l = 0;
  let r = l;
  let sum = nums[l];

  if (sum === target) return [0, 0];

  while (r < k) {
    if (sum < target) {
      r++;
      sum += nums[r];
    } else if (sum > target && l < r) {
      sum -= nums[l];
      l++;
    } else if (sum > target && l === r) {
      l++;
      r = l;
      sum = nums[l];
    } else {
      return [l, r];
    }
  }

  return [];
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// export function subArrSum(nums: number[], target: number, k: number): number {
//   // Sliding window
//   let sum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
//   let count = sum === target ? 1 : 0; // number of sub arrays of length k that sum up to target

//   for (let l = 0; l < nums.length - k; l++) {
//     sum = sum - nums[l] + nums[l + k];
//     if (sum === target) count++;
//   }

//   return count;
// }

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

export function threeSum(nums: number[]): number[][] {
  // What happens if we sort the array first O(n log(n))
  // [-1,0,1,2,-1,-4] -> [-4,-1,-1,0,1,2]
  const tmp = [...nums].sort((a, b) => a - b);
  const set = new Set<string>();
  const triplets: [number, number, number][] = [];

  let i = 0;

  while (i < tmp.length - 2) {
    const cur = tmp[i];

    if (cur > 0) {
      // All other elements to the right will also be positive
      // Break the loop
      break;
    }

    // Use a 2-pointer approach to find 2 values that completes the triplet for cur
    const tuples = explore(tmp, i);

    for (const t of tuples) {
      set.add(`${cur},${t[0]},${t[1]}`);
    }

    i++;
  }

  set.forEach((t) => {
    const triplet = t.split(",").map((s) => parseInt(s)) as [number, number, number];
    triplets.push(triplet);
  });

  return triplets;
}

function explore(arr: number[], index: number): [number, number][] {
  const target = -1 * arr[index];
  const tuples: [number, number][] = [];
  let l = index + 1;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];

    if (sum === target) {
      tuples.push([arr[l], arr[r]]);
      l++;
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return tuples;
}

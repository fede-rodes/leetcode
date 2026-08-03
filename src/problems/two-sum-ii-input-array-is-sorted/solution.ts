// 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in
// non-decreasing order, find two numbers such that they add up to a specific
// target number. Let these two numbers be numbers[index1] and numbers[index2]
// where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers index1 and index2, each incremented
// by one, as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may
// not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

export function twoSum(numbers: number[], target: number): number[] {
  // Let's use 2 pointers, one starting at index 0 and the other at index numbers.length - 1
  // then we move them towards the center until we reach the.
  // If sum < target => l++
  // If sum > target => r--

  let l = 0;
  let r = numbers.length - 1;
  let stop = false;

  while (!stop) {
    const sum = numbers[l] + numbers[r];

    if (sum === target) {
      stop = true;
    } else if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    }
  }

  return [l + 1, r + 1];
}

// compute: O(n^2), mem: O(1)

// // 167. Two Sum II - Input Array Is Sorted
// // Given a 1-indexed array of integers numbers that is already sorted in
// // non-decreasing order, find two numbers such that they add up to a specific
// // target number. Let these two numbers be numbers[index1] and numbers[index2]
// // where 1 <= index1 < index2 <= numbers.length.

// // Return the indices of the two numbers index1 and index2, each incremented
// // by one, as an integer array [index1, index2] of length 2.

// // The tests are generated such that there is exactly one solution. You may
// // not use the same element twice.

// // Your solution must use only constant extra space.

// // Example 1:
// // Input: numbers = [2,7,11,15], target = 9
// // Output: [1,2]
// // Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// // Example 2:
// // Input: numbers = [2,3,4], target = 6
// // Output: [1,3]
// // Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// // Example 3:
// // Input: numbers = [-1,0], target = -1
// // Output: [1,2]
// // Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// export function twoSum(numbers: number[], target: number): number[] {
//   // The idea is to traverse the array using 2 pointers (l and r) starting at
//   // the 2 lowest index values. So, at the first iteration l = 0, r = 1;
//   // We then compute numbers[l] + numbers[r] and validate the result against the target
//   // If target is met, stop. Otherwise, do r++, calc the sum and validate the target.
//   // If target is not met, we have 2 options, either l++ or r++.
//   // We'll keep l fixed and move r until we overshoot the target. After this,
//   // We do l++ and start decreasing r (r--) until we wither meet the target
//   // or we undershoot or r = l + 1.

//   let l = 0;
//   let r = 1;
//   let stop = false;

//   while (!stop) {
//     if (r > numbers.length - 1) {
//       l++;
//       r = l + 1;
//     }

//     const sum = numbers[l] + numbers[r];

//     if (sum === target) {
//       stop = true;
//     } else if (sum > target) {
//       l++;
//       r = l + 1;
//     } else if (sum < target) {
//       r++;
//     }
//   }

//   return [l + 1, r + 1];
// }

// // compute: O(n^2), mem: O(1)

// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical
// lines drawn such that the two endpoints of the ith line are (i, 0)
// and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that
// the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

export function maxArea(height: number[]): number {
  // Since the area is given by the formula width * height
  // wich is: (j - i) * Math.min(height[i], height[j]), where j > i

  // We'll use 2 pointers to tackle this problem. Given the following situation:
  // [7, ... , 4], observe that it doesn;t make sense to move the left index forward
  // bc the are will always be restricted by the height of the right element:
  // even if on the left hand side we move forward and find an higher value, the
  // height of the container will still be 4 and the width less.
  // So in this case we move the right index to the left
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    maxArea = Math.max(maxArea, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxArea;
}

// export function maxArea(height: number[]): number {
//   // Since the area is given by the formula width * height
//   // wich is: (j - i) * Math.min(height[i], height[j]), where j > i

//   // We'll use 2 pointers to tackle this problem. Given the following situation:
//   // [7, ... , 4], observe that it doesn;t make sense to move the left index forward
//   // bc the are will always be restricted by the height of the right element:
//   // even if on the left hand side we move forward and find an higher value, the
//   // height of the container will still be 4 and the width less.
//   // So in this case we move the right index to the left
//   let maxArea = 0;

//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const area = (j - i) * Math.min(height[i], height[j]);
//       maxArea = Math.max(maxArea, area);
//     }
//   }

//   return maxArea;
// }
// operation: O(n^2), memory: O(1)


/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const {length} = nums
  const tmp = [...nums]

  // k could be any number, from 0 (no rotation) to k > nums.length (nultiple rotations)
  // Let's try to calculate the landing index for a single element
  // nums[0] -> k shifts -> nums[?]
  // I'm tempted to use modulo(length)
  // nums = [1,2,3,4,5]
  // k = 0
  // nums' = [1,2,3,4,5]
  // k = 1
  // nums1 = [2,3,4,5,1]
  // k = 5
  // nums' = [1,2,3,4,5]
  // k = 6
  // nums1 = [2,3,4,5,1]

  for (let i = 0; i < length; i++) {
    const remainder = (i - k) % length
    const nextIndex = remainder < 0 ? length + remainder : remainder
    nums[i] = tmp[nextIndex]
  }
};

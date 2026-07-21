export function flip(nums: number[]): number {
  const n = nums.length

  let i = 0; // index im looking at
  let flipCount = 0;

  while(i < n) {
    // is it a 1 or a 0 considering all the flips so far?
    if ((nums[i] + flipCount) % 2 === 0) {
      flipCount++
    }
    i++
  }

  return flipCount
}

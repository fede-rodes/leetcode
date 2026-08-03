// I'll keep track of the current index (we start at zero)
// and from there I'll compute the maxJump position based on the
// current index value.
// If max jump position equals the current index and current index
// is not the end of the array, stop, we can't move any further and therefore
// there is no solution to the problem
// if max jump position is greater than the current index, we update current index
// to be current index plus one and repeat the process
export function canJump(nums: number[]): boolean {
  const n = nums.length;

  let currIndex = 0;
  let maxjumpPos = 0;

  while (currIndex < n) {
    maxjumpPos = Math.max(maxjumpPos, nums[currIndex] + currIndex);

    if (maxjumpPos <= currIndex && currIndex !== n - 1) return false;

    currIndex++;
  }

  return true;
}

export function canJumpGreedy(nums: number[]): boolean {
  const n = nums.length;
  let goal = n - 1;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}

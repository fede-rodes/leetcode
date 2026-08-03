export function jump(nums: number[]): number {
  // we'll iterate over the array from left to right.
  // Starting at index 0, we'll compute the interval
  // form by all jumping combinations from index 0.
  // The right hand side of said interval is the further we
  // can jump.
  // Then, for each element in the subarray we'll compute all
  // possible jumps to create a second sub array.
  // It basically tells us how far we can go with the "best"
  // seoncond jump. We'll iterate using this approach until
  // reaching the end of the array
  const n = nums.length;

  let l = 0;
  let r = 0;
  let count = 0;

  while (r < n - 1) {
    [l, r] = calcSubArr(l, r, nums);
    count++;
  }

  return count;
}

export function calcSubArr(l: number, r: number, nums: number[]): [number, number] {
  const newL = r + 1;
  let newR = r + 1;

  for (let i = l; i <= r; i++) {
    newR = Math.max(newR, nums[i] + i);
  }

  return [newL, newR];
}

export function product(nums: number[]): number {
  const n = nums.length;

  // solution it's either the 2 lowest values multiplied by the highest one OR
  // the 3 highest values
  const sorted = nums.sort((a: number, b: number) => a - b);

  const op1 = [0, 1, n - 1].reduce((acc, elem) => acc * sorted[elem], 1);
  const op2 = [n - 3, n - 2, n - 1].reduce((acc, elem) => acc * sorted[elem], 1);

  return Math.max(op1, op2);
}

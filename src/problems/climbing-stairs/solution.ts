export function climbStairs(n: number): number {
  if (n < 2) return n;

  let count = 0;

  for (let i = 1; i < Math.floor(n/2) + 1; i++) {
    count += n - i;
  }

  if (n % 2 === 0) {
    count++
  }

  return count;
};

export function maxProfit(prices: number[]): number {
  // We start at index 0 and we'll be moving forward one index at a time
  // standing at index i, if nums[i] < nums[i+1], we buy in i and sell in i+1
  // else we move one index forward
  const n = prices.length;
  let maxProfit = 0;

  for (let i = 0; i < n - 1; i++) {
    const profit = prices[i + 1] - prices[i];
    if (profit > 0) {
      // is a profitable trade
      maxProfit += profit;
    }
  }

  return maxProfit;
}

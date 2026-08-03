export function maxProfit(prices: number[]): number {
  const { length } = prices;

  // best solution
  let maxSellPrice = prices[length - 1];
  let maxProfit = 0;

  // Has solution
  for (let i = length - 2; i >= 0; i--) {
    const buyPrice = prices[i];
    maxSellPrice = Math.max(prices[i + 1], maxSellPrice);
    const profit = maxSellPrice - buyPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

// export function maxProfit(prices: number[]): number {
//   const {length} = prices

//   // best solution
//   let maxProfit = 0;

//   // Has solution
//   for(let i = 0; i < length - 1; i++) {
//     // for (let j = 1; j < length - i; j++) {
//     const tail = prices.slice(i + 1)
//     const maxSellPrice = Math.max(...tail);
//     const profit = maxSellPrice - prices[i];

//     if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//   }

//   return maxProfit;
// };

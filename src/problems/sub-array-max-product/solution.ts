export function maxProduct(nums: number[], k: number): number {
  let prod = nums.slice(0, k).reduce((acc, val) => acc * val, 1);
  let maxProd = prod;

  for (let l = 0; l < nums.length - k; l++) {
    // if l = nums.length - k - 1 => r = nums.length - 2
    prod = (prod * nums[l + k]) / nums[l];
    maxProd = Math.max(maxProd, prod);
  }

  return maxProd;
}

// export function maxProduct(nums: number[], k: number): number {
//   let l = 0; // left most index of the window
//   // the right index of the window is given by l + k - 1
//   let prod = nums.slice(0, l + k).reduce((acc, val) => acc * val, 1);
//   let maxProd = prod;

//   while (l < nums.length - k - 1) {
//     // if l = nums.length - k - 1 => r = nums.length - 2
//     prod /= nums[l];
//     l++;
//     prod *= nums[l + k - 1];
//     maxProd = Math.max(maxProd, prod);
//   }

//   return maxProd;
// }

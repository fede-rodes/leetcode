// Given an integer array nums, return an array answer such that answer[i] is equal to the
// product of all the elements of nums except nums[i].
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  // count the number of zeros in nums. If the is > 1, then the array answers will
  // be full of zeros
  let zeroIdx: number | undefined = undefined;
  let countZeros = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
        zeroIdx = i
        countZeros++
        if (countZeros > 1) break;
    }
  }

  if (countZeros > 1) {
    return new Array(n).fill(0)
  }

  // Get the poduct of all element
  const product = nums.reduce((acc, val) => val === 0 ? acc : acc * val, 1);

  // In case there is one element with value 0
  if (countZeros === 1) {
    const answer = new Array(n).fill(0)
    answer[zeroIdx!] = product;
    return answer;
  }

  // In case all elements are non-zero
  const answer = new Array(n).fill(product)

  for(let i = 0; i < n; i++) {
    answer[i] = answer[i] / nums[i]
  }

  return answer;
};

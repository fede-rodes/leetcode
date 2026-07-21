/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const tmp: number[] = new Array(n+m).fill(0);

    let i = 0, j = 0;

    for (let k = 0; k < n+m; k++){
      // TODO: && i < n && j < m
      const validNums1 = nums1[i] != null && i < m;
      const validNums2 = nums2[j] != null && j < n;

      if (validNums1 && validNums2) {
          if (nums1[i] <= nums2[j]) {
              tmp[k] = nums1[i];
              i++;
          } else {
              tmp[k] = nums2[j];
              j++
          }
      } else if (validNums1) {
          tmp[k] = nums1[i];
          i++;
      } else if (validNums2) {
          tmp[k] = nums2[j];
          j++
      }
   }

  for (let k = 0; k < n+m; k++){
    nums1[k] = tmp[k];
   }

};

// export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//    const tmp = [...(nums1.slice(0, m)), ...nums2]
//    tmp.sort((a, b) => a- b)

//   for (let k = 0; k < n+m; k++){
//     nums1[k] = tmp[k];
//    }
// };

// export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//    if (m + n !== nums1.length) {
//     throw new Error("Array 1 length mismatch");
//    }

//    if (n !== nums2.length) {
//     throw new Error("Array 2 length mismatch");
//    }

//    const sortedArr = new Array(n+m).fill(0);
//    console.log(sortedArr);

//    for (let i = 0; i < m; i++) {
//         sortedArr[i] = nums1[i];
//    }
//    for (let j = 0; j < n; j++) {
//     sortedArr[m+j] = nums2[j];
//    }

//   //  nums1 = [...sortedArr].sort((a, b) => a - b);
//    sortedArr.sort((a, b) => a - b);

//    for (let k = 0; k < n+m; k++){
//     nums1[k] = sortedArr[k];
//    }
// };

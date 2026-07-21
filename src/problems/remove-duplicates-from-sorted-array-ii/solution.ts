export function removeDuplicates(nums: number[]): number {
    const INVALID = -1 * 10 ** 5
    const {length} = nums;
    let k = 0;
    // keeps track of the number of appearances of each number
    const counter: Record<number, number> = {}

    for(let i = 0; i < length; i++) {
        const val = nums[i]
        if (counter[val] >= 2) {
            nums[i] = INVALID;
        } else {
            counter[val] = counter[val] === undefined ? 1 : counter[val] + 1;
            k++;
        }
    }

    let i = 0;

    while(i < length - 1) {
        if(nums[i] === INVALID && nums[i+1] !== INVALID) {
            nums[i] = nums[i+1]
            nums[i+1] = INVALID;
            i--;
        } else {
            i++
        }
    }

    return k;
};

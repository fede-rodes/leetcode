export function removeDuplicates(nums: number[]): number {
    const tmp: number[] = [];

    nums.forEach((elem) => {
        if(tmp.length === 0 || elem !== tmp[tmp.length -1]) {
            tmp.push(elem);
        }
    })

    tmp.forEach((elem, i) => {
        nums[i] = elem;
    })


    return tmp.length;
};

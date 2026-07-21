export function majorityElement(nums: number[]): number {
    const {length} = nums
    const map: Record<number, number> = {}

    for (let i = 0; i < length; i++) {
        const val = nums[i];
        map[val] = (map[val] ?? 0) + 1;
    }

    let majCount = 0;
    let majVal = -1 * 10 ** 10;

    for(const [key, val] of Object.entries(map)) {
        if (val > majCount) {
            majCount = val;
            majVal = parseInt(key);
        }
    }

    return majVal;
};

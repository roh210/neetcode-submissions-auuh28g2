class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxLength(nums) {
        const map = new Map();
        map.set(0, -1);
        let length = 0;
        let runningSum = 0;
        for (let i = 0; i < nums.length; i++) {
            runningSum += nums[i] === 1 ? 1 : -1;
            if (map.has(runningSum)) {
                length = Math.max(length, i - map.get(runningSum));
            } else {
                map.set(runningSum, i);
            }
        }
        return length;
    }
}

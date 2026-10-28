class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Set(nums);
        let maxLength = 0;
        for (const num of map) {
            if (!map.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;
                while (map.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
                maxLength = Math.max(maxLength, currentStreak);
            }
        }
        return maxLength;
    }
}
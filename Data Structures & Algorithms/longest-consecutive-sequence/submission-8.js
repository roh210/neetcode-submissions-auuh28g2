class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxStreak = 0;
        for (const num of nums) {
            if (!set.has(num - 1)) {
                // find the value that is start of sequence
                let currentStreak = 0;
                while (set.has(num + currentStreak)) {
                    currentStreak++;
                }
                maxStreak = Math.max(maxStreak, currentStreak);
            }
        }
        return maxStreak;
    }
}

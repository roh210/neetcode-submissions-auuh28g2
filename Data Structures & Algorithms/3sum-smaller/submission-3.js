class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    threeSumSmaller(nums, target) {
        let count = 0;
        if (nums.length < 3) return count;
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 2; i++) {
            let l = i + 1,
                r = nums.length - 1;

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                if (sum < target) {
                    count += (r - l);
                    l++;
                } else {
                    r--;
                }
            }                
        }
        return count;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        for (let r = 1; r < nums.length; r++) {
            if (nums[l] !== nums[r]) {
                l++;
                nums[l] = nums[r];
            }
        }
        return nums.length === 0 ? 0 : l+1
    }
}

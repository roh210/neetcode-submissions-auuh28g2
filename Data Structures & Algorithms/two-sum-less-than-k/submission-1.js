class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    twoSumLessThanK(nums, k) {
        let l = 0,
            r = nums.length - 1;
        let res = -1;
        nums.sort((a, b) => a - b);
        while (l < r) {
            let sum = nums[l] + nums[r];
            if (sum < k) {
                res = Math.max(res, sum);
                l++;
            }else{
                r--
            }
        }
        return res;
    }
}

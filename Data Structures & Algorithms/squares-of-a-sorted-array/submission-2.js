class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let n = nums.length
        let l = 0,
            r = n - 1,
            resI = n-1
        let res = [];
        while (l <= r) {
            if (nums[l] ** 2 > nums[r] ** 2) {
                res[resI] = nums[l] ** 2;
                l++;
            } else {
                res[resI] = nums[r] ** 2;
                r--;
            }
            resI--
        }
        return res;
    }
}

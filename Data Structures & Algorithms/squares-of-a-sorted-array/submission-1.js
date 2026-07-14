class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l = 0,
            r = nums.length - 1;
        let res = [];
        while (l <= r) {
            if (nums[l] ** 2 > nums[r] ** 2) {
                res.push(nums[l] ** 2);
                l++;
            } else {
                res.push(nums[r] ** 2);
                r--;
            }
        }
        return res.reverse();
    }
}

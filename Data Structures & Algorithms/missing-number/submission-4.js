class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
       return nums.reduce((accum,current,i) => accum ^=i^current ,nums.length)
    }
}

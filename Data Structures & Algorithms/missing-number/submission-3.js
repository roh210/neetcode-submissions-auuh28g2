class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const nSet = new Set(nums)
        for(let i = 0; i<=nums.length;i++){
            if(!nSet.has(i))return i
        }
    }
}

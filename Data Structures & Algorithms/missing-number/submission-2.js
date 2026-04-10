class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const nSet = new Set(nums)
        let count = 0
        for(let i = 0; i<nums.length;i++){
            count=i
            if(!nSet.has(i))return i
        }
        return count+1
    }
}

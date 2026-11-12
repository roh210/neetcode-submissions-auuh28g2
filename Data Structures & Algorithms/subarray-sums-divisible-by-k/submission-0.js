class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums, k) {
        // (sum-prefixSum)%k
        const map = new Map()
        map.set(0,1)
        let res = 0
        let runningSum=0
        for(let i = 0;i<nums.length;i++){
         runningSum +=nums[i]
         let remainder = runningSum % k
         if(remainder < 0) remainder+=k
         res+= map.get(remainder) || 0

         map.set(remainder,(map.get(remainder) || 0) +1)
        }
        return res
    }
}

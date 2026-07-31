class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minSubarray(nums, p) {
        const map = new Map();
        let min  = nums.length
        let runningSum = 0
        let prefixSum = 0
        map.set(0,-1)

        for(let i = 0 ;i<nums.length;i++){
            prefixSum = (prefixSum + nums[i]) % p
        }
        let targetRemainder = prefixSum % p 
         if(targetRemainder === 0) return 0

         for(let i = 0; i<nums.length;i++){
           runningSum = (runningSum + nums[i]) % p
           let remainder = (runningSum - targetRemainder +p) % p 
           if(map.has(remainder)){
             min = Math.min(min,i-map.get(remainder))
           }
           map.set(runningSum,i)
         }
        return min >=nums.length? -1 : min
    }
}

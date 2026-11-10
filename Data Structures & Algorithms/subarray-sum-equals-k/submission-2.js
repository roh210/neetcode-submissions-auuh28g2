class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map =  new Map()
        map.set(0, 1)
        let runningSum = 0
        let count = 0
        for(let i=0;i<nums.length;i++){
          runningSum+=nums[i]
          let diff = runningSum-k
          if(map.has(diff)){
            count += map.get(diff)
          }
          map.set(runningSum, (map.get(runningSum) || 0) + 1)
        }
       return count
    }
}
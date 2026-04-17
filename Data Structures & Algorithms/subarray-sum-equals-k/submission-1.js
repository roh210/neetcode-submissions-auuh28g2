class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
     let count = 0
     let currentSum = 0
     const sumMap = new Map()

     sumMap.set(0,1)
     
     for(const n of nums){
        currentSum+=n
        let diff = currentSum - k
        if(sumMap.has(diff)){
            count +=sumMap.get(diff)
        }
        sumMap.set(currentSum,(sumMap.get(currentSum)|| 0) +1)
     }

     return count
    }
    
}

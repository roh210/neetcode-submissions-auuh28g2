class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const freqMap = {}
        for(let i=0; i<nums.length; i++){
            freqMap[nums[i]] = (freqMap[nums[i]] || 0 ) +1 
          if(freqMap[nums[i]] > nums.length/2) return nums[i]
        }
    }
}

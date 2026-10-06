class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const map = new Map()
       // let diff = target - nums[i]
       // 7 - currnent val = 3 = 4 
       // 7- current 4  = 3 
       //if the diff value exists in the map then we know 
      // in the hash map we need to store index value key index:difference

      for(let i = 0; i <nums.length; i++){
        let diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(nums[i],i)
      }
    }
}

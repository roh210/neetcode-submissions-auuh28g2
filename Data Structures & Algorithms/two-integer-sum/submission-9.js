class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      //brute force approach on^2 nested for loop 

      // we can use look up method , using a hastable
      // key value pair diff : index
      // if seen the diff then return i, map.get(diff)
      // otherwise set nums[i] , i
      const map = new Map()
      
      for(let i  = 0 ; i<nums.length;i++){
        let diff = target - nums[i]
        
        if(map.has(diff)) return [i, map.get(diff)]

        map.set(nums[i],i)
      }

    }
}

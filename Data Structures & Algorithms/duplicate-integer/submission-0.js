class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const countMap = new Map();
       
       for(let i = 0; i<nums.length;i++){
        if(!countMap.has(nums[i])){
           countMap.set(nums[i],1)
        }
        else{
            countMap.set(nums[i],countMap.get(nums[i]) +1)
        }
       }
    let bool = false;
      countMap.forEach((values) => {
        console.log(values)
       if(values > 1){
        bool = true;
     }
   })
return bool;
    }
}

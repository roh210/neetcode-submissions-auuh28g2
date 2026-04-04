class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
     let total = 0
     for(const n of nums){
        total += n
     }
    let leftSum = 0
    let rightSum = 0
    for(let i = 0 ; i<nums.length;i++){
        if(i === 0) leftSum = 0
        if(i === nums.length-1) rightSum = 0
        rightSum  = total -leftSum - nums[i]
      if(leftSum === rightSum) return i
      leftSum +=nums[i]
    }
return -1 
    }
}

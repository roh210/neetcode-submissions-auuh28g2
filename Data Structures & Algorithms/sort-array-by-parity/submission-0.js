class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let l = 0
        for(let r = 0 ; r<nums.length;r++){
            if(nums[r] % 2 === 0){
              [nums[l],nums[r]] = [nums[r],nums[l]]
              l++
            }
        }
        return nums
    }
}

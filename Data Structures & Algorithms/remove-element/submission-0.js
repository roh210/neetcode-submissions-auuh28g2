class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const newArr = []

        for(let i = 0; i<nums.length ; i++){
            if(nums[i] !== val){
                newArr.push(nums[i])
            }
        }
        for(let i = 0 ; i<newArr.length; i++){
            nums[i] = newArr[i]
        }
        
        return newArr.length
    }
}

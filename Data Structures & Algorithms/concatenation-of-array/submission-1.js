class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
    const newArr = new Array(nums.length *2)
    const n = nums.length
    let j = 0
        for(let i = 0 ; i<newArr.length; i++){
            if(i >= n ){
              newArr[j+n] = nums[j]
              j++
            }
            else{
             newArr[i] = nums[i]
            }
            
        }

        return newArr
    }
}

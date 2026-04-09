class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     const output =[]
     let product = 1
     for(let i = 0 ; i<nums.length;i++){
        product = 1
       for(let j = 0; j<nums.length;j++){
         if(i!==j){
            product = nums[j] * product
         }
       }
       output.push(product)
     }
     return output
    }

}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        for(let i = 0 ; i<nums.length;i++){
            let product = 1
            for(let j=0; j<=i-1; j++){ //left loop 
                product *=nums[j]
            }
            for(let j=i+1; j<nums.length;j++){ //right loop
              product *=nums[j]
            }
            res[i] = product
        }
        return res
    }
}

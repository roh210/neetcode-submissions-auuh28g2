class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let s = nums[0] ,  f = nums[nums[0]]

        while(s!==f){
            s= nums[s]
            f=nums[nums[f]]
        }

        let p1 = 0
        let p2 = s
        while(p1 !== p2){
            p1 = nums[p1]
            p2=nums[p2]
        }
        return p1
    }
      
}

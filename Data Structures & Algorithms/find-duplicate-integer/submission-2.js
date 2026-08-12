class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0], fast=nums[nums[0]]

        while(slow!==fast){
            slow = nums[slow]
            fast = nums[nums[fast]]
        }

        let p1 = 0
        let p2 = slow
        while(p1 !==p2){
            p1=nums[p1]
            p2=nums[p2]
        }
        return p1
    }
}

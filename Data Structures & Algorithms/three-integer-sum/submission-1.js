class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const arr = [];
        for (let i = 0; i < sorted.length-2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i+1, k = sorted.length - 1;
            while (j < k) {
                let target = -nums[i];
                if (nums[j] + nums[k] < target) {
                    j++;
                } else if (nums[j] + nums[k] > target) {
                    k--;
                } else if (nums[j] + nums[k] === target) {
                    arr.push([nums[i],nums[j], nums[k]]);
                   while(j<k  && nums[j] === nums[ j+1]) j++
                   while(j<k  && nums[k] === nums[ k-1]) k--
                   j++
                   k--
                }
            }
        }
        return arr;
    }
}
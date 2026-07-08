class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const res = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i+1 && nums[j] === nums[j - 1]) continue;

                let l = j + 1,
                    r = nums.length - 1;
                while (l < r) {
                    let sum = nums[i] + nums[j] + nums[l] + nums[r];
                    if (sum < target) {
                        l++;
                    } else if (sum > target) {
                        r--;
                    } else {
                        res.push([nums[i], nums[j], nums[l], nums[r]]);
                        l++;
                        while (nums[l] === nums[l - 1] && l < r) l++;
                    }
                }
            }
        }
        return res;
    }
}

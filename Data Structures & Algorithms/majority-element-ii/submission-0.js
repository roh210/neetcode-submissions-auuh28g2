class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map()
        const res = []
        for(const n of nums){
            map.set(n,(map.get(n) || 0) + 1)
        }
        for(const [key,value] of map ){
            if(value > Math.floor(nums.length/3)) res.push(key)
        }
        return res
    }
}

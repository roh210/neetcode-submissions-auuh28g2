class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(const n of nums){
           if(!map.has(n)){
            map.set(n,0)
           }
           map.set(n,map.get(n) +1);
        }
    
     return [...map.keys()].sort((a,b) => map.get(b)-map.get(a)).slice(0,k)
      
    }
}

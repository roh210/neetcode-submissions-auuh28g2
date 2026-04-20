class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const freq = nums.reduce((a, cv) => {
       a[cv] = (a[cv] || 0) + 1;
       return a;
       }, {})
    
     return Object.keys(freq).map(Number).sort((a,b) => freq[b] - freq[a]).slice(0,k)
      
    }

    
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const freqMap = {}
    for(const n of nums){
      freqMap[n] = (freqMap[n] || 0 ) +1 
    }
    const sorted = new Map(
    Object.entries(freqMap).sort((a, b) => b[1] - a[1])
) 
 return [...sorted.keys()].slice(0,k).map(Number)
}
}

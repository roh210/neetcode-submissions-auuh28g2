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
    Object.entries(freqMap).sort((a, b) => Number(b[1]) - Number(a[1]))
) 
  const keys = [...sorted.keys()]
   const arr = []
    for(let i = 0 ; i<k; i++){
       arr.push(Number(keys[i]))
    }
    return arr
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = {}
        for(const s of strs){
            const key = s.split("").sort().join("")
            freqMap[key] ??=[]
            freqMap[key].push(s)
        }
       return Object.values(freqMap)
    }
}

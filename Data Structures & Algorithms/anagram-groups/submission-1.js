class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = {}
        for(let i = 0 ; i<strs.length;i++){
            let key = strs[i].split("").sort().join("")
          if(freqMap[key]){
            freqMap[key].push(strs[i])
          }else{
            freqMap[key] = [strs[i]]
          }
        }
       return Object.values(freqMap)
    }
}

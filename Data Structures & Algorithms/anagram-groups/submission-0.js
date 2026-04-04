class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) return [[strs[0]]]
        const freqMap = {}
        const newArr = []
        for(let i = 0 ; i<strs.length;i++){
            let key = strs[i].split("").sort().join("")
          if(freqMap[key]){
            freqMap[key].push(strs[i])
          }else{
            freqMap[key] = [strs[i]]
          }
        }
        for(const key in freqMap){
            newArr.push(freqMap[key])
        }
      return newArr
    }
}

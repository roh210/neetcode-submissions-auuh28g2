class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length === 0 ) return ""
        let prefix = strs[0]
        for(let i=1; i<strs.length;i++){
          let j = 0 
          while(j<prefix.length && j<strs[i].length){
            console.log(prefix[j], strs[i][j])
            if(prefix[j]  !== strs[i][j]){
                break
            }
            j++
          }
          prefix= prefix.substring(0,j)
          if(prefix === "") return ""
        }
        
        return prefix
    }
    
}

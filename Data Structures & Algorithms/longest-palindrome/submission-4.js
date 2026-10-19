class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const sMap = {}
        let res = 0
        for(const c of s){
            sMap[c] = (sMap[c] || 0) + 1
        }
        let odd = false
        for(const key in sMap){
            if(sMap[key] % 2 === 0){
                res+=sMap[key]
            }
            else{
              odd = true
              res+=sMap[key]-1
            }
        }
       
        return odd ? res + 1 : res
    }
}

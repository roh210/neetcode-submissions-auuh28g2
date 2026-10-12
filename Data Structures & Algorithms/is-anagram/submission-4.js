class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check if they contain the same amount of char
        // freq count for both and then compare

        if(s.length !== t.length) return false

        const sMap = {}
        const tMap = {}

        for(const st of s){
            sMap[st] = (sMap[st] || 0 ) + 1
        }
        for(const st of t){
            tMap[st] = (tMap[st] || 0) +1
        }
       for(const key in tMap){
         if(!sMap[key]) return false
         if(sMap[key] !==tMap[key]) return false
       
       }

       return true
    }
}

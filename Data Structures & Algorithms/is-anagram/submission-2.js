class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const countS = {}
        const countT = {}
        for(let i = 0 ; i<s.length; i ++){
            countS[s[i]] = (countS[s[i]] || 0 ) +1
            countT[t[i]] = (countT[t[i]] || 0) +1 
        }
        let i= 0 
        for(const key in countS){
            if(key in countT ){
            if(countS[key] === countT[key]){
                i++
            }
        }
        }
        if(i === Object.keys(countS).length) return true
        return false
    }
}

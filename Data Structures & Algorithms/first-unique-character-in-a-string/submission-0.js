class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const map = {}

        for(const st of s){
            map[st] = (map[st] || 0 ) +1
        }

        for(let i = 0; i<s.length;i++){
            if(map[s[i]] === 1) return i
        }
        return -1
    }
}

class Solution {
    /**
     * @param {string} num
     * @return {boolean}
     */
    isStrobogrammatic(num) {
        const hash = {0:'0',1:'1',6:'9',8:'8',9:'6'}
        let l = 0, r=num.length-1

        while(l<=r){
            if(!hash[num[l]]||hash[num[l]] !== num[r]) return false
            r--
            l++
        }
        return true
    }
}

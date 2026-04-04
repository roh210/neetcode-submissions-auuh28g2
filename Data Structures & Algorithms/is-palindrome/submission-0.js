class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
        let L = 0
        let R = s.length-1

        while(L<R){
            if(s[L] !==s[R]) return false
            L++
            R--
        }
        return true
    }
}

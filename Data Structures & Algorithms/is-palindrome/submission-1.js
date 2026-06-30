class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let L = 0,
            R = str.length - 1;
        while (L < R) {
            if (str[L] !== str[R]) return false;
            L++;
            R--;
        }
        return true;
    }
}

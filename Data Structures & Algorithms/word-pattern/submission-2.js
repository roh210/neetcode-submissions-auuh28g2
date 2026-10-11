class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let sArr = s.split(" ");
        if (pattern.length !== sArr.length) return false;

        let seen = new Map();
        let used = new Set();

        for (let i = 0; i < sArr.length; i++) {
            if (!seen.has(pattern[i])) {
                if(!used.has(sArr[i])){
                 seen.set(pattern[i], sArr[i]);
                }else{
                     seen.set(pattern[i], "");
                }
                used.add(sArr[i]);
            } else {
                if (!used.has(sArr[i])) return false;
            }
        }
        if(used.size !==seen.size) return false
        return true;
    }
}

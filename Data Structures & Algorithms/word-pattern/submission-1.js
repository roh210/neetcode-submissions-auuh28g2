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

        // first add the mapping  used contains unique key value
        for (let i = 0; i < sArr.length; i++) {
            if (!seen.has(pattern[i])) {
                if(!used.has(sArr[i])){
                 seen.set(pattern[i], sArr[i]);
                }else{
                     seen.set(pattern[i], "");
                }
                used.add(sArr[i]);
            } else {
                console.log(used.size,seen.size)
                if (!used.has(sArr[i])) return false;
            }
        }
        if(used.size !==seen.size) return false
        console.log(seen);
        console.log(used);
        return true;
    }
}

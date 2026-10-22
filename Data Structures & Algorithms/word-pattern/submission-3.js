class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const strArr = s.split(" ");
        if (pattern.length !== strArr.length) return false;
        const pMap = new Map();
        const sMap = new Map();

        for (let i = 0; i < strArr.length; i++) {
            let p = pattern[i];
            let c = strArr[i];
            if (pMap.has(p) && pMap.get(p) !== c) return false;
            if (sMap.has(c) && sMap.get(c) !== p) return false;

            pMap.set(p, c);
            sMap.set(c, p);
        }

        return true;
    }
}

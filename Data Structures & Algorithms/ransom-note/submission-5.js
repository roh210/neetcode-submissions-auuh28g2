class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const rMap = {};
        const mMap = {};

        for (const r of ransomNote) {
            rMap[r] = (rMap[r] || 0) + 1;
        }

        for (const m of magazine) {
            mMap[m] = (mMap[m] || 0) + 1;
        }
        let bool = false;
        console.log(rMap)
        console.log(mMap)
        for (const m in rMap) {
            if (rMap[m] <= mMap[m]) { //4<=2 return
                bool = true;
            } else {
                bool = false;
                break
            }
        }
        return bool;
    }
}

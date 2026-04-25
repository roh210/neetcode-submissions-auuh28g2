class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let countOnes = s.split("1").length - 1;
        let maxScore = 0;
        let countZero = 0
        for (let i = 0; i < s.length -1; i++) {
            if (s[i] === "1") countOnes--;
            if (s[i] === "0") countZero++;

            maxScore = Math.max(maxScore, (countOnes + countZero));
        }
        return maxScore;
    }
}

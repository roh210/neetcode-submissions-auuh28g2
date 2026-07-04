class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l=0,r=Math.min(word1.length-1,word2.length-1)
        let str = ""
        while(l<=r){
         str+=word1[l]+word2[l]
         l++
        }
        if(word1.length < word2.length) str+= word2.slice(l)
        else str+=word1.slice(l)
        return str
    }
}

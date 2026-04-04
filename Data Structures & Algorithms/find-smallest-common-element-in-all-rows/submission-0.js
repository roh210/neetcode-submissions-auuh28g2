class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat) {
        const hash = {}
        let val = 0
        for(let r = 0 ; r<mat.length;r++){
            for(let c = 0; c<mat[r].length;c++){ 
                 val = mat[r][c]
                 hash[val] = (hash[val] || 0) +1
                if(hash[val] === mat.length) return val
            }
        }
        return -1
    }
}

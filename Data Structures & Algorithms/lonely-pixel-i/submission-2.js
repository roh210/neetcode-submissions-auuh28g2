class Solution {
    /**
     * @param {character[][]} picture
     * @return {number}
     */
    findLonelyPixel(picture) {
        const hashRow = {}
        const hashCol = {}
        let count =0
        for(let r=0;r<picture.length; r++){
            for(let c = 0 ;c<picture[r].length;c++){
                if(picture[r][c] === 'B'){
                    hashRow[r] = (hashRow[r] || 0 ) +1
                    hashCol[c] = (hashCol[c] || 0 ) +1
                }
            }
        }
        for(let r=0; r<picture.length;r++){
            for(let c=0; c<picture[r].length;c++){
                if(picture[r][c] === "B" && hashRow[r] ===1 && hashCol[c] ===1) count++
            }
        }
        return count
    }
}

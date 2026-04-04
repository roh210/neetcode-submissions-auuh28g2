class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows = matrix.length
        const cols = matrix[0].length

        this.prefix = Array.from({length: rows+1},  () => new Array(cols + 1).fill(0))

       for(let r = 1; r<=rows;r++){
        for(let c = 1; c<=cols; c++){
            this.prefix[r][c] =  matrix[r-1][c-1]
                              + this.prefix[r-1][c]    // sum from above
                              + this.prefix[r][c-1]    // sum from left
                              - this.prefix[r-1][c-1]  // added twice, remove once

        }
       }

    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
     let sum = this.prefix[row2+1][col2+1] - this.prefix[row1][col2+1] - this.prefix[row2+1][col1]+this.prefix[row1][col1]

     return sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

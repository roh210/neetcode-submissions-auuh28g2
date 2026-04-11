class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
       const rows = new Map(), cols = new Map(), boxes = new Map()

        for(let r=0;r<board.length;r++){
            for(let c=0;c<board[r].length;c++){
                const cell = board[r][c]
                if(cell ==='.') continue
                const boxI =Math.floor((r/3))*3 + Math.floor(c/3)
                if(rows.get(r)?.has(cell)|| cols.get(c)?.has(cell) || boxes.get(boxI)?.has(cell)){
                    return false
                }
               if(!rows.has(r)) rows.set(r,new Set())
               if(!cols.has(c)) cols.set(c,new Set())
               if(!boxes.has(boxI)) boxes.set(boxI,new Set())
              rows.get(r).add(cell)
              cols.get(c).add(cell)
              boxes.get(boxI).add(cell)
            }
        }
       return true
    }
}

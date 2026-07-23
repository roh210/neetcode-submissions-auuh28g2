class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastIndex = {}

        for(let i = 0 ; i<S.length; i++){
            lastIndex[S[i]] = i
        }
        let end  = 0, size=0
        let res = []

        for(let i = 0; i<S.length;i++){
            size++
            end = Math.max(end, lastIndex[S[i]])

            if(i === end){
                res.push(size)
                size = 0
            }
        }
        return res
    }
}

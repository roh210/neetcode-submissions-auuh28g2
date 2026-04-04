class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax  = -1
        let res = new Array(arr.length)
        for(let i= arr.length-1;i>=0;i--){
            res[i] = rightMax
            rightMax = Math.max(rightMax,arr[i])
        }
        return res
    }
}

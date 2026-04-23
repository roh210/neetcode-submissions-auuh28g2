class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefixSum =[]
        let sum=0
        for(const n of nums){
            sum+=n
            this.prefixSum.push(sum)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const leftSum  = this.prefixSum[left - 1] ?? 0 
        const rightSum = this.prefixSum[right]
        return rightSum - leftSum
    }
}

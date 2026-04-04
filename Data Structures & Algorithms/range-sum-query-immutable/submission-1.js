class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = new Array()
        let total = 0
        for(const n of nums){
            total +=n
            this.prefix.push(total)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let preRight = this.prefix[right]
        let preLeft = this.prefix[left-1] ?? 0
        return (preRight - preLeft)
    }
}

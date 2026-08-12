/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {number}
     */
    pairSum(head) {
        // convert to array
        const arr = [];
        let curr = head
        while (curr !== null) {
            arr.push(curr.val);
            curr = curr.next;
        }

        let max = 0
        for(let i = 0;i<arr.length;i++){
            max=Math.max(max,(arr[i] + arr[arr.length-1-i]))
        }
        return max
    }
}

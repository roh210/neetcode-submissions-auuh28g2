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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry !== 0) {
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;
            let sum = val1 + val2 + carry;
            curr.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
            curr = curr.next;
        }
        curr.next = l1 || l2;
        return dummy.next;
    }
}

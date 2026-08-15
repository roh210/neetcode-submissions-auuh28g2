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
     * @return {void}
     */
    reorderList(head) {
        let f = head,
            s = head;
        //find the midpoint
        while (f && f.next) {
            s = s.next;
            f = f.next.next;
        }
        let prev = null;
        while (s) {
            // second half is reversed
            let temp = s.next;
            s.next = prev;
            prev = s;
            s = temp;
        }
        let first = head;
        let second = prev;
          //join them

        while (second.next) {
            let f1 = first.next;
            let s1 = second.next
            first.next = second;
            second.next = f1;
            first = f1
            second = s1
        }
    }
}

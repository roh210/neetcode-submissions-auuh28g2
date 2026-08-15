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
        let slow = head,
            fast = head;
        // find the midpoint to reverse
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // reverse the second half
        let prev = null
        while (slow) {
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow= temp;
        }
       //linking them together 
        let first = head 
        let second = prev

        while(second && second.next){
          let temp1 = first.next
          let temp2 = second.next
          first.next = second
          second.next = temp1
          first = temp1
          second = temp2
        }
    }
}

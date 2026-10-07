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
     * @return {ListNode}
     */
    reverseList(head) {
        //three variables 
        //temp that preserves the current.next value
        // no need of dummy node sentinel since we are just swapping
        // return head.next
   
        let prev = null
        let curr = head
       
       while(curr !== null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
       }
       return prev
    }
}

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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        const dummy = new ListNode(0,head)
        let curr = head
        let leftPrev = dummy

        for(let i=0;i<left-1;i++){
           leftPrev = curr //left pointer
            curr = curr.next  //where to start reversal from
        }
        
        let prev = null // store the reverse node
        for(let i=0;i<(right-left)+1; i++){
          let temp = curr.next
          curr.next = prev
          prev = curr
          curr = temp
        }
        leftPrev.next.next = curr
        leftPrev.next = prev

        return dummy.next
    }
}

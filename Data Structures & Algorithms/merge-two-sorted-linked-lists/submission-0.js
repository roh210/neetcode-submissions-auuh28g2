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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l1 = list1;
        let l2 = list2;
        let dummy = new ListNode(-1)
        let curr = dummy
        while (l1 !== null && l2 !== null) {
           if(l1.val <= l2.val){
            curr.next = l1
            l1 = l1.next 
           }else{
            curr.next = l2
            l2 = l2.next
           }
           curr = curr.next
        }
        if(l1 !==null){
         curr.next = l1
        }else{
            curr.next =l2
        }
        return dummy.next
    }
}

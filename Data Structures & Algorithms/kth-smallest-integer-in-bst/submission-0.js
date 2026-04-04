/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
         let counter = 0;
        let val;
        function inorder(tree){
        if(tree ===null) return;
        inorder(tree.left)
         counter++;
        if(counter === k){
             val = tree.val
          return;
        }
         inorder(tree.right)
        }
        inorder(root)
        return val;
    }
}

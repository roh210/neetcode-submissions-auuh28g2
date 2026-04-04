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
     * @return {number[]}
     */
    rightSideView(root) {
        const queue = []
        let level = 0;
        const arr = [];

        if(root !==null)queue.push(root)
        while(queue.length > 0){
            console.log("level " + level)
            let levelLength = queue.length
            for(let i = 0; i<levelLength;i++){
              let curr = queue.shift()
              console.log(curr.val)
              if(curr.left !==null){
                queue.push(curr.left)
              }
              if(curr.right !==null){
                queue.push(curr.right)
              }
             //if reached the last level val add to arr
             if (i === levelLength - 1) {
                arr.push(curr.val);
            }
            }
            
            level++
        }
        return arr
    }
}

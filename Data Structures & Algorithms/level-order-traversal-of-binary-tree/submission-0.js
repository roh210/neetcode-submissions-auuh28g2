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
     * @return {number[][]}
     */
    levelOrder(root) {
        //n level should have n subarrays
        const number = [];
        const sub = []
        let queue = [];

        if(root !==null) queue.push(root);
        let level = 0;
        
        while(queue.length >0){
            console.log("level " + level)
            const levelArr =[]
            let levelLength = queue.length
            for(let i =0;  i<levelLength;i++){
                let curr = queue.shift()
                 levelArr.push(curr.val)

                if(curr.left !==null){
                    queue.push(curr.left)
                }
                if(curr.right !==null){
                    queue.push(curr.right)
                }
            }
            sub.push(levelArr)
            level++
            console.log()
        }
      return sub
    }
}

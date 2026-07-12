class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const pref = new Array(height.length);
        pref[0] = height[0]
        const suffix = [];
        let res = 0;

        for (let i = 1; i < height.length; i++) {
            pref[i] = Math.max(pref[i - 1], height[i]);
        }
        for (let i = height.length - 1; i >= 0; i--) {
            suffix[i] = Math.max(height[i], (suffix[i + 1] ?? 0));
        }
        for (let i = 0; i < height.length - 1; i++) {
             res +=Math.max(0,(Math.min(pref[i], suffix[i]) - height[i]));
            
        }
        return res;
    }
}

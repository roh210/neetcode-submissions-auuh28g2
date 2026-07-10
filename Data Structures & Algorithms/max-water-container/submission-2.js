class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let l = 0,
            r = heights.length - 1;

        while (l < r) {
            let cf = (r - l) * Math.min(heights[l], heights[r]);
            if (heights[l] < heights[r]) l++;
            else r--;

            max = Math.max(max, cf);
        }

        return max;
    }
}

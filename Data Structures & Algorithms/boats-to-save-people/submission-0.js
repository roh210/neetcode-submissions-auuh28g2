class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let l = 0,
            r = people.length - 1;
        let res = [];
        while (l <= r) {
            if (people[l] + people[r] > limit) {
                let maxVal = Math.max(people[l], people[r]);
                res.push([maxVal]);
                r--;
            } else {
                res.push([people[l], people[r]]);
                l++;
                r--;
            }
        }
        return res.length;
    }
}

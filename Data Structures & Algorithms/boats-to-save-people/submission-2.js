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
        let res = 0;
        while (l <= r) {
            if (people[l] + people[r] > limit) {
                res += 1;
                r--;
            } else {
                res += 1;
                l++;
                r--;
            }
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;
        const sorted = hand.sort((a, b) => a - b);
        const map = new Map();

        for (let i = 0; i < sorted.length; i++) {
            if (!map.has(sorted[i])) {
                map.set(sorted[i], 0);
            }
            map.set(sorted[i], map.get(sorted[i]) + 1);
        }
        // every time we iterate group size we can decrement over our freq count
        // if they are non consecutive then we can return false

        for (let i = 0; i < sorted.length; i++) {
            if (map.get(sorted[i]) > 0) {
                let count = map.get(sorted[i]);
                for (let j = 0; j < groupSize; j++) {
                    let currentCard = sorted[i] + j;
                    if ((map.get(currentCard) || 0) < count) return false;
                    map.set(currentCard, map.get(currentCard) - count);
                }
            }
        }
        return true;
    }
}
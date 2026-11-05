class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0 ) return false
        
        const sortedArr = hand.sort((a,b)  => a -b)
        const map = new Map()
        for(const n of sortedArr){
            map.set(n,(map.get(n)?? 0) +1)
        }
        for(let i = 0 ; i<sortedArr.length;i++){
            const card = sortedArr[i]
            if(map.get(card) > 0){
              for(let j = 0 ; j<groupSize;j++){
                let nextCard = card +j
                if(!map.has(nextCard)) return false
                map.set(nextCard, map.get(nextCard)-1)
              }
            }
        }
        return true
    }
}

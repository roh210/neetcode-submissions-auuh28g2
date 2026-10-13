class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // sort each char and count freq
        // if already {a:1,c:1,t:1 } : [] chekc if this key exists push in res
        // construct key value pair where key
        //sort the key and then check if that key exists push word in
        //for each key char does it exist in char i
        const map = {};
        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split("").sort().join("")
            if(!map[key]){
                map[key] = []
            }
            map[key].push(strs[i])
        }
        return [...Object.values(map)]
    }
}

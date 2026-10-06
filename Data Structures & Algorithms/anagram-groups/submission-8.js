class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // hash map 
        // for each word sort the char 
        //we check if the char appears in that string 
            // if it does then we group them 
        
        // return the object.values

        const map = {}

        for(const s of strs){
         const key = s.split("").sort().join("")
         if(!map[key]) map[key] = []

         map[key].push(s)
        }
        return Object.values(map)

    }
}

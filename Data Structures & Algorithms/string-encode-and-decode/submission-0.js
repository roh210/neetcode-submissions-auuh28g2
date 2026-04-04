class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ""
        for(const s of strs){
            str+=s.length+"#"+s
        }
    return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const result = []
        while(i < str.length){
           let j = i
           while(str[j] !== "#"){
            j++
           }
           let length = parseInt(str.substring(i,j),10)
           i = j+1
           result.push(str.substring(i,i+length))
           i+=length
        }
       return result
    }
}

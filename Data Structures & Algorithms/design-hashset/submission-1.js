class MyHashSet {
    constructor() {
        this.obj  = {}
    }
   
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
    this.obj[key] = this.obj[key] ?? ""
      
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.obj[key]
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
      return Object.keys(this.obj).map(Number).includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

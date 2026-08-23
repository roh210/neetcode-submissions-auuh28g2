class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.size = k;
        this.head = 0;
        this.tail = -1;
        this.count = 0;
        this.items = new Array(this.size);
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) return false
        this.tail = (this.tail+1) % this.size
        this.items[this.tail] = value
        this.count++
        return true 
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty())  return false
            this.head = (this.head + 1) % this.size;
            this.count--;
            return true;
       
    }

    /**
     * @return {number}
     */
    Front() {
       return this.isEmpty() ? -1 : this.items[this.head]
    }

    /**
     * @return {number}
     */
    Rear() {
       return this.isEmpty() ?  -1 : this.items[this.tail]
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.count === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.count;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

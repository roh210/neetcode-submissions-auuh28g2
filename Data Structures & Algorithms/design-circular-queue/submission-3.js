class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.size = k;
        this.head = 0;
        this.tail = 0;
        this.count = 0;
        this.items = new Array(this.size);
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (!this.isFull()) {
            this.items[(this.head + this.count) % this.size] = value;
            this.tail++;
            this.count++;
            return true;
        }
        return false;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (!this.isEmpty()) {
            this.head = (this.head + 1) % this.size;
            this.count--;
            return true;
        }
        return false;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.isEmpty()) return -1;

        return this.items[this.head];
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.isEmpty()) return -1;
        const tailIndex = (this.head + this.count - 1) % this.size;
        return this.items[tailIndex];
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

class ListNode {
    constructor(val) {
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}
class MyLinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    getNode(index) {
        if (index < 0 || index >= this.size) return null;

        let curr = this.head.next;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }
    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        return getNode(index).prev;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        return this.getNode(index).val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new ListNode(val);
        newNode.prev = this.head;
        newNode.next = this.head.next;

        this.head.next.prev = newNode;
        this.head.next = newNode;

        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let newNode = new ListNode(val);
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;

        this.tail.prev.next = newNode;
        this.tail.prev = newNode;

        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        // get the curr node from get prev(index).next
        const newNode = new ListNode(val);
        const curr = this.getNode(index);

        newNode.prev = curr.prev;
        newNode.next = curr;

        curr.prev.next = newNode;
        curr.prev = newNode;

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;

        const curr = this.getNode(index);
        let before = curr.prev
        let after = curr.next
        before.next = after
        after.prev = before

        this.size--;
    }
}

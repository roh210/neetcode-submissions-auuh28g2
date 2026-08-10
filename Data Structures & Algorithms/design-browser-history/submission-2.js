class ListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.curr = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.curr.next = new ListNode(url, this.curr, null);
        this.curr = this.curr.next; //[0]<->[1]<->...
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        //back here means prev node
        while (this.curr.prev && steps > 0) {
            this.curr = this.curr.prev;
            steps--;
        }
        return this.curr.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (this.curr.next && steps > 0) {
            this.curr = this.curr.next;
            steps--;
        }
        return this.curr.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

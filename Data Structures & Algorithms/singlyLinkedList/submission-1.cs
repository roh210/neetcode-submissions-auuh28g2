public class ListNode{
    public int val;
    public ListNode Next;

    public ListNode(int val){
        this.val = val;
        this.Next = null;
    }

    public ListNode(int val, ListNode Next){
        this.val = val;
        this.Next = Next;
    }
}
   public class LinkedList {
     ListNode head;
     ListNode tail;

    public LinkedList() {
     head = new ListNode(-1);
     tail = head;
    }

    public int Get(int index) {
        ListNode curr = head.Next; //first value arr[0]
        int i = 0;
        while(curr !=null){
            if(i == index){
                return curr.val;
            }
            i++;
            curr =curr.Next;
        }
      return -1;
    }

    public void InsertHead(int val) {
     ListNode newNode = new ListNode(val);
     newNode.Next = head.Next;
     head.Next = newNode;
     if(newNode.Next == null){
        tail = newNode;
     }
    }

    public void InsertTail(int val) {
      this.tail.Next = new ListNode(val);
      this.tail = this.tail.Next;
    }

    public bool Remove(int index) {
        int i=0;
        ListNode curr =this.head;
        while(i<index && curr !=null){
            i++;
            curr = curr.Next; //find index to remove
        }
        //remove the node ahead of curr
        if(curr !=null && curr.Next !=null){
            if(curr.Next == this.tail){
                this.tail = curr;
            }
            curr.Next =curr.Next.Next;
            return true;
        }
        return false;
    }

    public List<int> GetValues() {
     List<int> res = new List<int>();
     ListNode curr = this.head.Next;
     while(curr !=null){
        res.Add(curr.val);
        curr = curr.Next;
     }
       return res;
    }
}
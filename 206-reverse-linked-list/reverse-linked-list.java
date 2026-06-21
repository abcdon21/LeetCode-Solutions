class Solution {
    public ListNode reverseList(ListNode head) {

        if (head == null) return null;

        ListNode temp = head;
        int count = 0;

        while (temp != null) {
            count++;
            temp = temp.next;
        }

        temp = head;

        int[] arr = new int[count];

        for (int i = 0; i < count; i++) {
            arr[i] = temp.val;
            temp = temp.next;
        }

        int i = 0;
        int j = count - 1;

        while (i < j) {
            int t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
            i++;
            j--;
        }

        temp = head;

        for (i = 0; i < count; i++) {
            temp.val = arr[i];
            temp = temp.next;
        }

        return head;
    }
}

//prev=null
// current=head
// while(current!=null)
// node next=current.next
// current.next=prev
// prev=current
// current=next
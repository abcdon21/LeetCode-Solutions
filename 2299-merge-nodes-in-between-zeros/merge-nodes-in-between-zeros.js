/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let dummy= new ListNode(0);
    let tail=dummy;
    let sum=0;
    let curr=head.next;//skipping first 0
    while(curr){
        if(curr.val==0){
         tail.next= new ListNode(sum);
         sum=0;
         tail=tail.next;
        
        }
        else{ sum+=curr.val  }
        curr=curr.next;
      
    }
    return dummy.next;
    
};
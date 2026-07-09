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
var insertionSortList = function(head) {
let dummy=new ListNode(0);
while(head!== null) {
let prev = dummy;
// Find the correct position to insert
while(prev.next !== null && prev.next.val < head.val) {
prev = prev.next;
        }
// Save the next node
let next = head.next;
// Insert current node
head.next = prev.next;
prev.next = head;

        // Move to the next node
        head = next;
    }

    return dummy.next;
};
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
var sortList = function(head) {

if(head===null||head.next===null) return head;

    let arr = [];
    let curr = head;
// Store values in an array
    while(curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
// Sort the array
    arr.sort((a, b) => a - b);

    // Put sorted values back into the linked list
    curr = head;
    let i = 0;

    while (curr) {
        curr.val = arr[i++];
        curr = curr.next;
    }

    return head;
};



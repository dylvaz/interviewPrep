/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 1 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {

  let slow = head;
  let fast = head;

  while (n-- > 1) {
    fast = fast.next;
  }

  let prev = null;

  while (fast !== null) {
    fast = fast.next;
    prev = slow;
    slow = slow.next;
  }

  if (prev === null) {
    return slow;
  }

  prev.next = slow.next;
  slow.next = null;

  return head;
};

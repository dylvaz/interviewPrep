/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let slow = head;
  let fast = head;
  let palindrome = true;

  //increment fast at twice the speed as slow so when fast is at the end we have slow in the middle;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  let prev = null;
  while (slow !== null) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  while (prev !== null) {
    if (fast.val !== prev.val) {
      palindrome = false;
    }
    fast = fast.next;
    prev = prev.next;
  }

  return palindrome;
};
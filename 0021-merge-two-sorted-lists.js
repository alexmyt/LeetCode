const assert = require('node:assert').strict;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let res = {};
    let curRes = res;
    let cur1 = list1;
    let cur2 = list2;

    while (cur1) {
      while (cur2 && cur2.val < cur1.val) {
        curRes.next = {val: cur2.val};
        curRes = curRes.next;
        cur2 = cur2.next;
      }

      curRes.next = {val: cur1.val};
      curRes = curRes.next;
      cur1 = cur1.next;
    }

    while (cur2) {
      curRes.next = {val: cur2.val};
      curRes = curRes.next;
      cur2 = cur2.next;
    }

    curRes.next = null;
    return res.next;
};

assert.deepEqual(mergeTwoLists(
  {val: 1, next: {val: 2, next: {val:4, next: null}}},
  {val: 1, next: {val: 3, next: {val:4, next: null}}},
  ),
  {val: 1, next: {val: 1, next: {val:2, next: {val: 3, next: {val: 4, next: {val:4, next: null}}}}}},
);

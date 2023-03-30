const assert = require('node:assert/strict');

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let cur = 0; let ptr = 0;
  for(ptr; ptr < nums.length; ptr++) {
    if (nums[ptr] !== val) {
      nums[cur] = nums[ptr];
      cur++; 
    };
  }
  
  return cur;
};

let arr = [3,2,2,3];
let res = removeElement(arr,3);
assert.deepEqual(arr, [2,2,2,3]);
assert.equal(res,2);
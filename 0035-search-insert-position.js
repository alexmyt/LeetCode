'use strict';

const assert = require('node:assert').strict;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let ptr = 0;
  for (ptr; ptr < nums.length; ptr++) {
    if (nums[ptr] >= target) {
      return ptr;
    }
  }

  return ptr;
};

assert.equal(searchInsert([1,3,5,6], 5), 2);
assert.equal(searchInsert([1,3,5,6], 2), 1);
assert.equal(searchInsert([1,3,5,6], 7), 4);
assert.equal(searchInsert([1,3,5,6], 0), 0);

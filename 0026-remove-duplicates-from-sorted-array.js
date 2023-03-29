const assert = require('node:assert').strict;

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let ret = 1;
  
  nums.map((el, index) => {
    if (index && el > nums[ret - 1]) {
      nums[ret] = el;
      ret++;
    }
  })

  return ret;
};

let arr = [1,1,2];
assert.equal(removeDuplicates(arr),2);
assert.deepEqual(arr.slice(0,2),[1,2])
const assert = require('node:assert').strict;

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let ret = -1;
  for(let ptr = needle.length; ptr <= haystack.length; ptr++) {
    const buff = haystack.slice(ptr - needle.length, ptr);
    if (buff === needle) {
      ret = ptr - needle.length;
      break;
    }
  }

  return ret;
};

assert.equal(strStr('sadbutsad', 'sad'), 0);
assert.equal(strStr('leetcode', 'leeto'), -1);
assert.equal(strStr('hello', 'll'), 2);

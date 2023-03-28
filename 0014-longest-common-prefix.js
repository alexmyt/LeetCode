const assert = require('node:assert').strict;

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let ln = -1;
  const first = strs.shift();

  if(!strs.length) return first;

  let res = true;
  while (res) {
    ln = ln + 1;
    res = strs.every((el) => el.length >= ln && el[ln] === first[ln])
  }

  return first.slice(0, ln);
};

assert.equal(longestCommonPrefix([""]), '');
assert.equal(longestCommonPrefix(["flower","flow","flight"]), 'fl', `must be 'fl'`);

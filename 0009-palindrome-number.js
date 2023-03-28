const assert = require('node:assert').strict;
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let dest = 0, src = Math.abs(x);
  while (src>9) {
    dest = dest*10+src%10;
    src = Math.floor(src/10);
  }
  return dest*10+src === x;
};

assert.equal(isPalindrome(121), true, '121 must be true');
assert.equal(isPalindrome(-121), false, '-121 must be false');
assert.equal(isPalindrome(10), false, '10 must be false');
assert.equal(isPalindrome(9999), true, '9999 must be true');

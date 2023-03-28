const assert = require('node:assert').strict;

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parents = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  const arr = [];
  return s.split('').every((el) => {
    if ('({['.includes(el)) {
      arr.push(el);
      return true;
    }

    if (')}]'.includes(el)) {
      return arr.length && parents[el] === arr.pop();
    }
  }) && arr.length === 0;
};

assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true)
assert.equal(isValid('(])'), false)
assert.equal(isValid('({})'), true)
assert.equal(isValid('('), false)
assert.equal(isValid(')'), false)
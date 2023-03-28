const assert = require('node:assert').strict;

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    let int = 0;

    for (let i=0; i<s.length; i++) {
      if (map[s[i]] < map[s[i+1]]) {
        int -= map[s[i]];
      } else {
        int += map[s[i]];
      }
    }
    return int;
};

assert.equal(romanToInt('III'), 3, 'III must be = 3');
assert.equal(romanToInt('LVIII'), 58, 'LVIII must be = 58');
assert.equal(romanToInt('MCMXCIV'), 1994, 'MCMXCIV must be = 1994');

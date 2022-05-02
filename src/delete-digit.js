const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
    let max = 0;
    for (let i = 0; i < String(n).split('').length; i++) {
        curN = String(n).split('');
        curN.splice(i, 1);
        max = Math.max(max, +curN.join(''));
    }
    return max;
}

module.exports = {
  deleteDigit
};

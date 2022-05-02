const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
    if (Array.isArray(arr)) {
        let transArr = [];
        let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
        for (let i = 0; i < arr.length; i++) {
            if (typeof commands.find(comm => comm == arr[i]) != "undefined") {
                if (arr[i] == '--discard-next' && i + 1 < arr.length) {
                    i++;
                    if (i + 1 < arr.length && (arr[i + 1] == '--discard-prev' || arr[i + 1] == '--double-prev')) i++;
                }
                else if (arr[i] == '--discard-prev' && i - 1 > 0) {
                    transArr.pop();
                }
                else if (arr[i] == '--double-next' && i + 1 < arr.length) {
                    transArr.push(arr[i + 1]);
                }
                else if (arr[i] == '--double-prev' && i - 1 > 0) {
                    transArr.push(arr[i - 1]);
                }
            }
            else
                transArr.push(arr[i]);
        }
        return transArr;
    }
    else throw Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};

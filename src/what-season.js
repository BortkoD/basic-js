const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    throw new NotImplementedError('Not implemented');
    if (typeof date == "undefined" || typeof date.getMonth === 'function' && !isNaN(Date.parse(date))) {
        if (typeof date == "undefined") {
            return "Unable to determine the time of year!";
        }
        else {
            let year = date.getFullYear(), month = date.getMonth(), day = date.getDate();
            if (year < 0 || month < 0 || month > 11 || day < 1 || day > 31) {
                throw Error('Invalid date!');
            }
            else {
                let day30 = [3, 5, 8, 10];
                if ((typeof day30.find(mnt => mnt == month) != "undefined" && day == 31) ||
                    (month == 1 && day > 29) ||
                    (month == 1 && (year % 4 != 0 || year % 400 != 0) && day == 29)) {
                    throw Error('Invalid date!');
                }
                else if (month == 11 || month < 2) return "winter";
                else if (month < 5) return "spring";
                else if (month < 8) return "summer";
                else return "autumn";
            }
        }
    }
    else throw Error('Invalid date!');
}

module.exports = {
  getSeason
};

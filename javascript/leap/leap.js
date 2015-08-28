/**
 * @param {number} year
 * @returns {boolean}
 */
var isLeapYear = function(year) {
  if ( year % 400 !== 0 && year % 100 === 0) {
    return false;
  }

  return year % 4 === 0;
};

module.exports = isLeapYear;

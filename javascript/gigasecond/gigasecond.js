/**
 * @param {number} second
 * @returns {number}
 */
var toMilliseconds = function(second) {
  return second * 1000;
};

/**
 * @param {Date} date
 * @constructor
 */
var Gigasecond = function(date) {
  this.startDate = date.valueOf();
};

/**
 * @returns {Date}
 */
Gigasecond.prototype.date = function() {
  var gigaseond = Math.pow(10, 9);
  var date = new Date(this.startDate + toMilliseconds(gigaseond));

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate());
};

module.exports = Gigasecond;
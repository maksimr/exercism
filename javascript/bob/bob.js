/**
 * @param {string} input
 * @returns {boolean}
 */
var isSilence = function(input) {
  return input.trim() === '';
};

/**
 * @param {string} input
 * @returns {boolean}
 */
var isShouting = function(input) {
  return input.toUpperCase() === input && /[A-Z]{2,}/.test(input);
};

/**
 * @param {string} input
 * @returns {boolean}
 */
var isQuestion = function(input) {
  return /\?$/.test(input);
};

var Bob = function() {
};

/**
 * @param {string} input
 * @returns {string}
 */
Bob.prototype.hey = function(input) {
  if (isSilence(input)) {
    return 'Fine. Be that way!';
  }

  if (isShouting(input)) {
    return 'Whoa, chill out!'
  }

  if (isQuestion(input)) {
    return 'Sure.';
  }

  return 'Whatever.';
};

module.exports = Bob;

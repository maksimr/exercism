module.exports = function wordCount(sentence) {
  if (typeof sentence !== 'string') {
    throw "Parameter should be a string";
  }

  var result = {};
  result[sentence] = 1;
  return result;
};
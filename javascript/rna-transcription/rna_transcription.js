/**
 * The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
 * guanine (**G**) and thymine (**T**).
 *
 * The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
 * guanine (**G**) and uracil (**U**).
 *
 * DNA    RNA
 * `G` -> `C`
 * `C` -> `G`
 * `T` -> `A`
 * `A` -> `U`
 *
 * @param {string} DNASeq
 * @return {string} RNA
 */
var toRna = function(DNASeq) {
  var _toRna = function(DNA) {
    var dnaToRnaTable = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };

    return dnaToRnaTable[DNA];
  };

  return DNASeq.split('').map(_toRna).join('');
};

module.exports = toRna;
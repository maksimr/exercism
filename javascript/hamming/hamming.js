var hamming = {};

/**
 * @param {string} DNASeq1
 * @param {string} DNASeq2
 * @returns {number}
 */
hamming.compute = function(DNASeq1, DNASeq2) {
  var hammingDistance = 0;

  if (DNASeq1.length !== DNASeq2.length) {
    throw Error('DNA strands must be of equal length.');
  }

  if (DNASeq1 === DNASeq2) {
    return hammingDistance;
  }

  return DNASeq1.split('').reduce(function(hammingDistance, DNA, index) {
    if (DNA !== DNASeq2[index]) {
      hammingDistance += 1;
    }

    return hammingDistance;
  }, hammingDistance);
};

module.exports = hamming;
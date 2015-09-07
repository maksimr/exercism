module.exports = function wordCount(sentence) {
    var wordsMap = {};

    if (typeof sentence !== 'string') {
        throw "Parameter should be a string";
    }

    sentence.trim().replace(/\s+/ig, ' ').split(' ').map(function(word) {
      return word.replace(/[!,@#$%&*]/ig, '');
    }).forEach(function(word) {
        if (!wordsMap[word]) {
            wordsMap[word] = 1;
        } else {
            wordsMap[word] += 1;
        }
    });

    return wordsMap;
};

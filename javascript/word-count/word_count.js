module.exports = function wordCount(sentence) {
    var wordsMap = {};

    if (typeof sentence !== 'string') {
        throw "Parameter should be a string";
    }

    sentence.trim().replace(/\s+/ig, ' ').split(' ').filter(function(word) {
        return /[A-zА-я-]+/.test(word);
    }).forEach(function(word) {
        word = word.replace(/[^a-zа-я\-^0-9]+/ig, '');
        if (!wordsMap[word]) {
            wordsMap[word] = 1;
        } else {
            wordsMap[word] += 1;
        }
    });

    return wordsMap;
};

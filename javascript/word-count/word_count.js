module.exports = function wordCount(sentence) {
    var wordsMap = {};

    if (typeof sentence !== 'string') {
        throw "Parameter should be a string";
    }

    sentence.split(' ').filter(function (word) {
        return word && /[A-z]/.test(word);
    }).forEach(function(word) {
        word = word.replace(/[^a-z]+/ig, '');
        if (!wordsMap[word]) {
            wordsMap[word] = 1;
        } else {
            wordsMap[word] += 1;
        }
    });

    return wordsMap;
};

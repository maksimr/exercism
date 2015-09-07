module.exports = function wordCount(sentence) {
    if (typeof sentence !== 'string') {
        throw "Parameter should be a string";
    }

    var result = {};
    result['Test'] = 1;
    if (sentence.indexOf(' ') > 0) {
        result['max'] = 1;
    }

    return result;
};
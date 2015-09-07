var wordCount = require('./word_count');

describe('word_count_test.spec', function() {
    it('should export word count function', function() {
        expect(wordCount).toBeDefined();
    });

    it('should throw if no input parameters passed', function() {
        expect(function () {
            return wordCount();
        }).toThrow();
    });
});

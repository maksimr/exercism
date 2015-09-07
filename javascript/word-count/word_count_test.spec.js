var wordCount = require('./word_count');

describe('word_count_test.spec', function () {
    it('should export word count function', function () {
        expect(wordCount).toBeDefined();
    });

    it('should throw if no input parameters passed', function () {
        expect(function () {
            return wordCount();
        }).toThrow();
    });

    it('should throw if input parameter is not string', function () {
        expect(function () {
            return wordCount(12343);
        }).toThrow();
        expect(function () {
            return wordCount("jdsldd");
        }).not.toThrow();
    });

    it('should get a correct count for sentence with one word', function () {
        expect(wordCount('Test')).toEqual({
            Test: 1
        });
    });

    it('should get a correct count for sentence with two words', function () {
        expect(wordCount('Test max')).toEqual({
            Test: 1,
            max: 1
        });
    });

    it('should get a correct count for sentence with four words', function () {
        expect(wordCount('Test max zeckson andrey')).toEqual({
            Test: 1,
            max: 1,
            zeckson: 1,
            andrey: 1
        });
    });

    it('should get a correct count for sentence with repeated words', function () {
        expect(wordCount('Test max zeckson andrey Test')).toEqual({
            Test: 2,
            max: 1,
            zeckson: 1,
            andrey: 1
        });
    });

    it('should be case sensetive', function () {
        expect(wordCount('Test max zeckson andrey test')).toEqual({
            Test: 1,
            test: 1,
            max: 1,
            zeckson: 1,
            andrey: 1
        });
    });

    it('should not count special symbols', function () {
        expect(wordCount('Test max zeckson andrey test!')).toEqual({
            Test: 1,
            test: 1,
            max: 1,
            zeckson: 1,
            andrey: 1
        });
    });

    it('should work correct with multiple spaces', function () {
        expect(wordCount('Test max   zeckson    andrey      test!')).toEqual({
            Test: 1,
            test: 1,
            max: 1,
            zeckson: 1,
            andrey: 1
        });
    });

    it('should ignore leading and trailing spaces', function () {
        var result = {
            Test: 1,
            test: 1,
            max: 1,
            zeckson: 1,
            andrey: 1
        };
        expect(wordCount(' Test max   zeckson    andrey      test!      ')).toEqual(result);
    });

    it('should ignore whitespaces inside', function () {
        var result = {
            Test: 1,
            test: 1,
            max: 1,
            zeckson: 1,
            andrey: 1
        };
        expect(wordCount(' Test max   zeckson  \t  andrey      test!      ')).toEqual(result);
    });

    it('should correct count composite word', function () {
        var result = {
            'Test-max': 1,
        };
        expect(wordCount('Test-max')).toEqual(result);
    });
});

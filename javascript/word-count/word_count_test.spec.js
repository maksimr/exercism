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
            'Test-max': 1
        };
        expect(wordCount('Test-max')).toEqual(result);
    });

    it('should correct count composite word', function () {
        var result = {
            'Test-max-2': 1
        };
        expect(wordCount('Test-max-2')).toEqual(result);
    });

    it('should work with russian', function () {
        var result = {
            'пирожок': 1,
            'лежит': 1
        };
        expect(wordCount('пирожок лежит')).toEqual(result);
    });

    it('should work with non-english languages', function () {
        var result = {
            'Düsseldorf': 1,
            'Köln': 1,
            'Москва': 1,
            '北京市': 1
        };
        expect(wordCount('Düsseldorf, Köln Москва 北京市')).toEqual(result);
    });

    it('should work with non-english languages', function () {
        var result = {
            'Düsseldorf': 1,
            'Köln': 1,
            'Москва': 1,
            '北京市': 1
        };
        expect(wordCount('Düsseldorf, Köln Мос!ква 北京市')).toEqual(result);
    });

    it('should work with non-english languages', function () {
        var result = {
            'Düsseldorf': 1,
            'Köln': 1,
            'Москва': 1,
            '北京市': 1
        };
        expect(wordCount('Düsseldorf, Köln %$# Мос!ква 北京市')).toEqual(result);
    });

    it('should have awesome perfomance', function () {
        var start = Date.now();
        var words = [];
        for (var i=0; i<50000; i++) {
            words.push(Math.random().toFixed(10).substr(2));
        }

        var text = words.join(' ');
        wordCount(text);
        var end = Date.now();

        var execTime = end - start;
        console.info(execTime);
        expect(execTime < 150).toBeTruthy();
    });
});

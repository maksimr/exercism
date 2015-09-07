module.exports = function wordCount(sentence) {
    var wordsMap = {};
    var split = ' \t'.split('').reduce(function(map, symbol) {
        map[symbol] = true;
        return map;
    }, {});
    var ignore = '!,@#$%&*'.split('').reduce(function(map, symbol) {
        map[symbol] = true;
        return map;
    }, {});



    if (typeof sentence !== 'string') {
        throw "Parameter should be a string";
    }

    var buffer = [];

    function save(buffer) {
        if(buffer.length > 0) {
            var word = buffer.join('');
            if (!wordsMap[word]) {
                wordsMap[word] = 1;
            } else {
                wordsMap[word] += 1;
            }
        }
    }

    for(var i = 0; i < sentence.length; i++) {
        var current = sentence[i];
        if(ignore[current]) {
            continue;
        }
        if(split[current]) {
            save(buffer);

            buffer = [];
        } else {
            firstExclude = true;
            buffer.push(current);
        }
    }

    save(buffer);


    return wordsMap;
};

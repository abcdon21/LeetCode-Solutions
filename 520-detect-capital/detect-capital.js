/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let countCapital = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            countCapital++;
        }
    }

    return (
        countCapital === word.length ||               
        countCapital === 0 ||                          
        (countCapital === 1 && word[0] >= 'A' && word[0] <= 'Z') 
    );
};
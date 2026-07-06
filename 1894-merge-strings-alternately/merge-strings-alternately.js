/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = "";
    let m = word1.length, n = word2.length;

    for(let i = 0; i < Math.max(m, n); i++) {
    if(word1.length > i) {
            ans += word1[i];
        }

    if(word2.length > i) {
            ans += word2[i];
        }
    }

    return ans;
};
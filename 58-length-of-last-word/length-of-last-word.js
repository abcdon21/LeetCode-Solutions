/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //access element of an array
    //s[0]/s.at(0)
    return s.trimEnd().split(" ").at(-1).length;
    
};
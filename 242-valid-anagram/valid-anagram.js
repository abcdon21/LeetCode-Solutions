/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //sort the string by converting it into array  .split("") and .sort()
    //and then againg joining by the array by using .join()
    return s.split("").sort().join()===t.split("").sort().join()
    
};
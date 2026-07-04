/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copynum=x, rev=0;
    while(copynum>0){
        const last=copynum%10;
        rev=rev*10+last;
        copynum=Math.floor(copynum/10);

    }
    return x===rev;;
    
};
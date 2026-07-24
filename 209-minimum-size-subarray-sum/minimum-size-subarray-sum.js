/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let low=0;
    let high=0;
    let sum=0;
    let result=Infinity;
   
    for (let high = 0; high < nums.length; high++) {
        sum += nums[high];

        while (sum >= target) {
            result = Math.min(result, high - low + 1);
            sum -= nums[low];
            low++;
        }
    }

    return result === Infinity ? 0 : result;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
   
    // let sum2=0;
    // for(let i=0;i<nums.length;i++){
    //     sum2 +=nums[i];
    // }

    // return nums.length*(nums.length+1)/2-sum2

    // OR

    return nums.length*(nums.length+1)/2-nums.reduce((acc,num)=> num+acc);

    
};
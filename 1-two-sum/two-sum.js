/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //two pointer only works with sorted array
    // let high=nums.length-1;
    // let low=0;
    // let sum=0;
    // while(high>low){
    //     sum=nums[high]+nums[low];
    //     if(sum===target) return [low,high];
    //     if (sum>target) high--;
    //     else low++;

    // }
    // return [];

    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let need= target-nums[i];

        if(map.has(need)) return [i,map.get(need)]

        map.set(nums[i],i)
    }
    
};
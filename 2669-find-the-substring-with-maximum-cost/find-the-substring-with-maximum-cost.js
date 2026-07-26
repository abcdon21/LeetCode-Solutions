/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    
    let map2=new Map();
   for(let i=0;i<chars.length;i++){
   map2.set(chars[i],vals[i])
   }
   let currsum=0;
   let maxsum=0;
   
  for(let ch of s){
    let cost = map2.has(ch)
            ? map2.get(ch)
            : ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    currsum=Math.max(cost,currsum+cost);
    maxsum=Math.max(maxsum,currsum);
  }
   return maxsum;
    
};
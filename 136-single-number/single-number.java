// ^ = XOR operator in Java cancels out duplicates
class Solution {
    public int singleNumber(int[] nums) {
        int result=0;
        Arrays.sort(nums);
        if(nums.length==1){
            return nums[0];
        }
        else{
        for(int i=0;i<nums.length;i++){
           
            result=result^nums[i];    

        }}
        return result;
        
    }
}
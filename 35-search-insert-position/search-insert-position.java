class Solution {
    public int searchInsert(int[] nums, int target) {

        int[] newArr = new int[nums.length + 1];

            for(int i = 0; i < nums.length; i++) {
               newArr[i] = nums[i];
}

            newArr[nums.length] = target;

            Arrays.sort(newArr);

             int j=-1;
      for(int i=0;i<nums.length+1;i++){
           if(newArr[i]==target){
                j=i ;
                break;
           }
          

      }
      return j;
        
    }
}
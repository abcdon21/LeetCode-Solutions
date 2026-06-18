class Solution {
    public int[] twoSum(int[] nums, int target) {
        //using hash map
         HashMap<Integer, Integer> map = new HashMap<>();
         for(int i=0;i<nums.length;i++){
            int diff=target-nums[i];
            if(map.containsKey(diff)){
              return new int[]{map.get(diff), i};
            }

            map.put(nums[i], i);
    }
        

        return new int[]{};
        }
         }








        // int n = nums.length;

        // for (int i = 0; i < n-1; i++) {
            
        //         if (nums[i] + nums[i+1] == target) {
        //             return new int[]{i, i+1};
                
        //     }
        // }

        // return new int[]{};
  
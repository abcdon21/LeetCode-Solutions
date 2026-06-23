class Solution {
    public int[] productExceptSelf(int[] nums) {

        int n = nums.length;
        int[] ans = new int[n];

        int preprod = 1;
        for (int i = 0; i < n; i++) {
            ans[i] = preprod;
            preprod *= nums[i];
        }

        int postprod = 1;
        for (int i = n - 1; i >= 0; i--) {
            ans[i] *= postprod;
            postprod *= nums[i];
        }

        return ans;
    }
}
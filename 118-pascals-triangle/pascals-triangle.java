class Solution {
    public List<List<Integer>> generate(int numRows) {
        //2d list for answer and 1d list for row
        List<List<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
      int result = 1;
    row.add(result);
for (int j = 1; j <= i; j++) {
result = result * (i - j + 1) / j;
row.add(result);
            }

            ans.add(row);
        }

        return ans;
    }
}
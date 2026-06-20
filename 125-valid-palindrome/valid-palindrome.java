class Solution {
    public boolean isPalindrome(String s) {

        String str = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = Character.toLowerCase(s.charAt(i));

            if (Character.isLetterOrDigit(ch)) {
                str += ch;
            }
        }

        
        for (int i = 0; i < str.length() / 2; i++) {
            int j = str.length() - 1 - i;

            if (str.charAt(i) != str.charAt(j)) {
                return false;}
                }

        return true;
    }
}
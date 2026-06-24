class Solution {
    public boolean isPalindrome(int x) {
        int n=x;
        int s=0;
        while(n>0)
        {
          int  k=n%10;
            s=s*10+k;
            n=n/10;
        }
        if(x==s){
            return true;
        }
        else
        return false;
        
    }
}
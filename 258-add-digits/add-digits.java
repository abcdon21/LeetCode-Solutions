class Solution {
    public int addDigits(int num) {
     //RECURSION 
        
        if (num < 10) {
            return num;           // Base case: single digit
        }

        return addDigits(sum(num));
    }

    int sum(int n) {
        if (n == 0) {
            return 0;             // Base case
        }

        return (n % 10) + sum(n / 10);
    }
}

        // int sum=0;
        // if(num==0) return 0;
        // else {
        //  sum=  1+ ((num-1)%9);
        // }
        // return sum;

        // return(n==0)


        // return (num==0?0:1+ ((num-1)%9));








       
        

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        HashMap<Character, Integer> map = new HashMap<>();

       
      for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (int i = 0; i < t.length(); i++) {
            char ch = t.charAt(i);
            if (!map.containsKey(ch)) {
                return false;
            }
            map.put(ch, map.get(ch) - 1);
        }
        for (int value : map.values()) {
            if (value != 0) {
                return false;
            }
        }

        return true;
    }
}
    //create hasmap of size 26 denote with values 0 from a-z 0-25 ,map[s[i]-'a']++ now increase frequency in map according to s
    //now iterate t and decrease value in hashmap and at last check which value in hashmap is not 0 return false
        // HashMap<Integer, Integer> map = new HashMap<>();
        //     for(int i=0;i<nums.length;i++){
        //         if(map.find(n[i])!=map.end()){
        //             return false;
        //             break;
        //         }
        //         map[i]=num[i];
        //         return true;
        //     }
          
 
      
      
      
      
        // boolean a=false;
        // if(s.length()==t.length()){
        // for(int i=0;i<s.length();i++){            
        //   String c=s.charAt(i);
        //     if(t.contains(c)){
        //       a=true;}}}
        //      return a;}}
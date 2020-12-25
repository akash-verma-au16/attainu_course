# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/first-unique-character-in-a-string/

class Solution:
    def firstUniqChar(self, s: str) -> int:
      
        dict = {}
        index = []
        
        for i in s:
            if i in dict.keys():
                dict[i] += 1
            else:
                dict[i] = 1
        
        for key, value in dict.items():
            if value == 1:
                index.append(s.index(key))
        
        if len(index) != 0:
            return min(index)
        
        return -1
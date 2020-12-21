# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/valid-anagram/

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if(sorted(s) == sorted(t)): 
            return True
        else: 
            return False 
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/longest-palindrome/

class Solution:
    def longestPalindrome(self, s: str) -> int:
        log = {}
        for i in s:
            if i in log:
                log[i] += 1
            else:
                log[i] = 1
        
        length = 0
        for val in log.values():
            if val < 2:
                continue
                
            elif val == 2:
                length += 2
            
            else:
                length += (val // 2) * 2
        
        if len(s) == length:
            return length
        
        else:
            return length + 1
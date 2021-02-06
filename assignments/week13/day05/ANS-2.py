# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        s_dict = {}
        n = len(s)
        start = 0
        end = 0
        max_length = 0
        
        while end < n:
            if s[end] not in s_dict:
                s_dict[s[end]] = end
                length = end - start + 1
                max_length = max(max_length, length)
                end += 1
            else:
                while s[end] in s_dict:
                    s_dict.pop(s[start])
                    start += 1
                    
                s_dict[s[end]] = end
                end += 1
                
        return max_length
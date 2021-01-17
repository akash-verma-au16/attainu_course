# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/sort-characters-by-frequency/

class Solution:
    def frequencySort(self, s: str) -> str:
        dictionary = {}
        for i in s:
            if i in dictionary:
                dictionary[i] += 1
            else:
                dictionary[i] = 1
        
        new_s = ''
        while dictionary:
            max_key = ''
            max_val = 0
            for key, value in dictionary.items():
                if value > max_val:
                    max_val = value
                    max_key = key
            new_s += max_key * max_val
            dictionary.pop(max_key)
            
        return new_s

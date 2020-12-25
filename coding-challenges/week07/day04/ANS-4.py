# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_str = ''
        for i in s:
            if i.isalpha() or i.isnumeric():
                new_str += i
        new_str = new_str.lower()
        if new_str == new_str[::-1]:
            return True
        else:
            return False
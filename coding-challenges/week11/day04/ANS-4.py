# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/power-of-two/

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        i = 0
        while 2 ** i <= n:
            if 2 ** i == n:
                return True
            else:
                i += 1
        return False
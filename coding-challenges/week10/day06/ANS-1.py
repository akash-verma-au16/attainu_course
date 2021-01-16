# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/fibonacci-number/

class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        
        if n == 1:
            return 1
        
        dp = [0] * (n + 1)
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
            
        return dp[i]
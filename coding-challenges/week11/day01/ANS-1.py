# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/climbing-stairs/

class Solution:
    def climbStairs(self, n: int) -> int:
        start = 0
        dp = [None] * 1005
        
        def solve(start, n):
            if start == n:
                return 1
            if start > n:
                return 0
            if dp[start] != None:
                return dp[start]

            single_jump = solve(start + 1, n)
            doubble_jump = solve(start + 2, n)

            dp[start] = single_jump + doubble_jump

            return dp[start]

        return solve(start, n)
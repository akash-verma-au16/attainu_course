# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/unique-paths/

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[None for _ in range (1000)] for _ in range (1000)]

        def solve(x, y, m, n):
            if x > m:
                return 0
            if y > n:
                return 0
            if dp[x][y] != None:
                return dp[x][y]
            if x == m and y == n:
                return 1
        
            ans = solve(x + 1, y, m, n) + solve(x, y + 1, m, n)
        
            dp[x][y] = ans
        
            return ans
        
        x = y = 1
        
        return solve(x, y, m, n) 
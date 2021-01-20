# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/minimum-path-sum/

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        dp = [[None for _ in range(1000)] for _ in range(1000)]
        def solve(x, y, dp):
            if x >= rows or x < 0 or y >= cols or y < 0:
                return float('inf')
            
            if x == rows - 1 and y == cols - 1:
                return grid[x][y]
            
            if dp[x][y] is not None:
                return dp[x][y]
            
            dp[x][y] = grid[x][y] + min(solve(x + 1, y, dp), solve(x, y + 1, dp))
            
            return dp[x][y]
 
        rows, cols = len(grid), len(grid[0])
        return solve(0,0, dp)
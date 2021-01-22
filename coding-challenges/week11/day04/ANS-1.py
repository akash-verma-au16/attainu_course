# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/number-of-islands/

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def backtrack(grid, i, j, r, c):
            
            if i >= r or j >= c or i < 0 or j < 0:
                return
            
            if grid[i][j] == "2" or grid[i][j] == "0":
                return
            
            grid[i][j]="2"
            
            backtrack(grid, i + 1, j, r, c)
            backtrack(grid, i - 1, j, r, c)
            backtrack(grid, i, j + 1 , r, c)
            backtrack(grid, i, j - 1, r, c)
            
            return              
            
        r = len(grid)
        c = len(grid[0])
        
        total = 0
        
        for i in range(r):
            for j in range(c):
                if grid[i][j] == "1":
                    backtrack(grid, i, j, r, c)
                    total += 1
        
        return total
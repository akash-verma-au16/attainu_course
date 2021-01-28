# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/n-queens-ii/

class Solution:
    def safe(self, row, col, chessboard):
        r = row
        c = col
        while r < self.n and c >= 0:
            if chessboard[r][c] == 'Q':
                return False
            r += 1
            c -= 1
            
        r = row
        c = col
        while r < self.n and c < self.n:
            if chessboard[r][c] == 'Q':
                return False
            r += 1
            c += 1
            
        r = row
        c = col
        while r >= 0 and c >= 0:
            if chessboard[r][c] == 'Q':
                return False
            r -= 1
            c -= 1
            
        r = row
        c = col
        while r >= 0 and c < self.n:
            if chessboard[r][c] == 'Q':
                return False
            r -= 1
            c += 1
            
        r = row
        c = col
        while r >= 0:
            if chessboard[r][c] == 'Q':
                return False
            r -= 1
            
        r = row
        c = col
        while r < self.n:
            if chessboard[r][c] == 'Q':
                return False
            r += 1
        
        r = row
        c = col
        while c >= 0:
            if chessboard[r][c] == 'Q':
                return False
            c -= 1
            
        r = row
        c = col
        while c < self.n:
            if chessboard[r][c] == 'Q':
                return False
            c += 1
        
        return True
    
    def solve(self, row, chessboard):
        if row == self.n:
            self.res += 1
            return
        
        for col in range(0, self.n):
            if self.safe(row, col, chessboard):
                chessboard[row][col] = 'Q'
                self.solve(row + 1, chessboard)
                chessboard[row][col] = '.'
                
    def totalNQueens(self, n: int) -> int:
        self.n = n
        self.res = 0
        
        chessboard = [['.' for _ in range(self.n)] for _ in range(self.n)]
        self.solve(0, chessboard)
        
        return self.res
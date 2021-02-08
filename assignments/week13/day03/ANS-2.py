# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/spiral-matrix-ii/

class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0 for _ in range(n)] for _ in range(n)]
        number = 1
        r1 = 0      # row forward   
        r2 = n - 1  # row backward
        c1 = 0      # column forward
        c2 = n - 1  # column backward
        x = n ** 2 
        while number <= x:
            
            for i in range(c1, c2 + 1):
                matrix[r1][i] = number
                number += 1
                
            r1 += 1
            
            for i in range(r1, r2 + 1):
                matrix[i][c2] = number
                number += 1
                
            c2 -= 1
            
            for i in range(c2, c1 - 1, -1):
                matrix[r2][i] = number
                number += 1
                
            r2 -= 1
            
            for i in range(r2, r1 - 1, -1):
                matrix[i][c1] = number
                number += 1
                 
            c1 += 1
            
        return matrix
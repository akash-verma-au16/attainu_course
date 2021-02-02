# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/flipping-an-image/

class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:       
        for k in range(len(A)):
            i = 0
            j = len(A[0]) - 1
            while i < j:
                A[k][i], A[k][j] = A[k][j], A[k][i]
                i += 1
                j -= 1
        
        for i in range(len(A)):
            for j in range(len(A[0])):
                if A[i][j] == 1:
                    A[i][j] = 0
                else:
                    A[i][j] = 1
        
        return A
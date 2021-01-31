# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/zigzag-conversion/

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        
        rows = ['' for _ in range(numRows)]  
        reverse = False
        j = 0
        for i in s:
            rows[j] += i
            
            if reverse:
                j -= 1
                if j == 0:
                    reverse = False
                    continue
            else:
                j += 1
                if j == numRows - 1:
                    reverse = True
                    continue
        
        ans = ''
        for i in rows:
            ans += i
            
        return ans
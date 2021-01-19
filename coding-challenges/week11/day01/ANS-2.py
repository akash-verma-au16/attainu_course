# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/longest-common-subsequence/

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        dp = [[None for _ in range (1000)] for _ in range (1000)]
        
        def solve(text1, text2, i1, i2):
            if i1 >= len(text1) or i2 >= len(text2):
                return 0

            if dp[i1][i2] != None:
                return dp[i1][i2]
            
            ans = 0
            if text1[i1] == text2[i2]:
                ans = 1 + solve(text1, text2, i1 + 1, i2 + 1)
            else:
                ans = max(solve(text1, text2, i1 + 1, i2), solve(text1, text2, i1, i2 + 1))
        
            dp[i1][i2] = ans
        
            return ans
        
        i1 = 0
        i2 = 0
        
        return solve(text1, text2, i1, i2)
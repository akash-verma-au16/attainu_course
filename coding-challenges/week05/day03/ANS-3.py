# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/number-of-1-bits/submissions/

class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count('1')
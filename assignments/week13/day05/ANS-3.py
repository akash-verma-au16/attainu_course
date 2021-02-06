# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/minimum-moves-to-equal-array-elements/

class Solution:
    def minMoves(self, nums: List[int]) -> int:
        m = min(nums)
        total = 0
        
        for i in nums:
            total += (i - m)
            
        return total
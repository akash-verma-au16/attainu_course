# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/single-number/

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        xor_variable = 0
        for i in nums:
            xor_variable ^= i
        return xor_variable

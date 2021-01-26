# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/first-missing-positive

class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        if not nums:
            return 1

        for i in range(1, len(nums) + 2):
            if i not in nums:
                return i
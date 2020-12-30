# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/wiggle-sort-ii/

class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums.sort()
        if len(nums) % 2:
            half = len(nums) // 2 + 1
            nums[::2], nums[1::2] = nums[:half][::-1], nums[half:][::-1]
        else:
            half = len(nums) // 2
            nums[::2], nums[1::2] = nums[:half][::-1], nums[half:][::-1]
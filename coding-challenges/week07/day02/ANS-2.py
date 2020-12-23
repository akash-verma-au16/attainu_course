# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        index = 0
        for i in range(1,len(nums)):
            if nums[i] != nums[index]:
                index += 1
                nums[index] = nums[i]
        nums = nums[0:index + 1]
        return len(nums)
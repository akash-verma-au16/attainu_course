# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/find-pivot-index/

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        all_sum = sum(nums)
        left_sum = 0
        for i in range(len(nums)):
            if left_sum == (all_sum - left_sum - nums[i]):
                 return i
            left_sum += nums[i]
        return -1


# Using recursion to solve this problem in VS-code this won't work on leetcode 

"""

left_sum = 0
i = 0
def pivotIndex(nums):
    global left_sum
    global i
    all_sum = sum(nums)
    if i == (len(nums)-1):
        return -1
    if l == (all_sum - left_sum - nums[i]):
        return i
    left_sum += nums[i]
    i += 1
    pivotIndex(nums)
    return -1

print(pivotIndex([1,7,3,6,5,6]))

"""

# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/binary-search/

# This solution is only for the implementation of Binary Search as asked in leetcode

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid -1 
            else:
                left = mid + 1 
        return -1

# I am commenting out the code for implementation of lowerbound and upperbound methods
# As this is not asked in leetcode and won't generate expected results there

"""

nums = [1,2,3,4,4,7,8,9,9,10,10,11,12]
target = 5

# lowerbound

for i in range(len(nums)):
    if nums[i] == target:
        print("lowerbound is : ", i)
    elif nums[i] > target:
        print("lowerbound is : ", i - 1)

# upperbound

for i in range(len(nums) -1, -1, -1):
    if nums[i] == target:
        print("upperbound is : ", i)
    if nums[i] < target:
        print("upperbound is : ", i + 1)

"""
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/product-of-array-except-self/

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        result = [0] * length
        result[0] = 1
        for i in range(1, length):
                result[i] = nums[i - 1] * result[i - 1]
                c = 1
        for i in range(length - 1, -1, -1):
                result[i] = result[i] * c
                c *= nums[i]
        return result 
# Paste the given code in geeksforgeeks for getting testcases, as it won't run here

# link - https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur_sum = nums[0]
        max_sum = nums[0]

        for i in range(1, len(nums)):
            cur_sum = max(cur_sum + nums[i], nums[i])
            max_sum = max(cur_sum, max_sum)
            
        return max_sum
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/running-sum-of-1d-array/

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        running_sum = []
        unit_sum = 0
        for i in nums:
            unit_sum += i
            running_sum.append(unit_sum)
        
        return running_sum
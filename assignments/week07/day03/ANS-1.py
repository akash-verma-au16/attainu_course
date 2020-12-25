# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/two-sum/

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        found = False
        for i in range(len(nums)):
            if found == False:
                if target - nums[i] in nums and target / 2 != nums[i]:
                    left = i
                    found = True
                if target / 2 == nums[i] and nums.count(nums[i]) > 1:
                    left = i
                    found = True                    
            else: 
                if nums[i] == target - nums[left]:
                    return [left, i]   
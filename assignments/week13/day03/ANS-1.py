# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/4sum/

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        res = set()
        for first in range(len(nums)):
            for second in range(first + 1, len(nums)):

                third = second + 1
                fourth = len(nums) - 1

                while third < fourth:
                    current_sum = nums[first] + nums[second] + nums[third] + nums[fourth]
                    
                    if target == current_sum:
                        res.add((nums[first], nums[second], nums[third], nums[fourth]))
                        third += 1
                        fourth -= 1

                    elif current_sum < target:
                        third += 1

                    else:
                        fourth -= 1
                    
        return res
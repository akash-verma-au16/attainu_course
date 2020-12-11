# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/number-of-1-bits/submissions/

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = {}
        for i in nums:
            if i in count:
                count[i] += 1
            else:
                count[i] = 1
        for key,value in count.items():
            if value > len(nums)/2:
                return key
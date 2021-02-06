# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        maxLen = 0
        total = 0
        windowStart = 0
        targetSum = sum(nums)
        
        if targetSum < x: 
            return -1
        
        if targetSum == x: 
            return len(nums)
        
        k = targetSum - x 
        
        for windowEnd in range(len(nums)):
            total += nums[windowEnd]
            
            while total > k:
                total -= nums[windowStart]
                windowStart += 1
            
            if total == k:
                maxLen = max(maxLen, windowEnd - windowStart + 1)
    
        if maxLen != 0:
            return len(nums) - maxLen  
        else:
            return -1
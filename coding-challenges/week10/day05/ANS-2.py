# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/kth-largest-element-in-an-array/

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        res = 1
        
        for i in range(len(nums)):
            nums[i] *= -1
            
        heapq.heapify(nums)

        while k:
            res = -1 * heapq.heappop(nums)
            k -= 1

        return res
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        return [self.lowerBound(nums,target), self.upperBound(nums,target)]
    
    def lowerBound(self, nums: List[int], target: int) -> int:
        index = -1
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (right + left) >> 1
            if nums[mid] == target:
                index = mid
                right = mid - 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return index
    
    def upperBound(self, nums: List[int], target: int) -> int:
        index = -1
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (right + left) >> 1
            if nums[mid] == target:
                index = mid
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return index
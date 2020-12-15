# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/search-insert-position/


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        
        if target <= nums[left]:
            return left
        elif target == nums[right]:
            return right
        elif target > nums[right]:
            return right + 1
        else:
            while right - left > 1:
                mid = (left + right) // 2
                if nums[mid] == target:
                    return mid
                elif nums[mid] > target:
                    right = mid
                else:
                    left = mid
                
        return left + 1
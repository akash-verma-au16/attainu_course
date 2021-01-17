# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/search-a-2d-matrix/

# So I have 4 Solutions for this:

# 1 # Simple Brute Force :

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for i in matrix:
            if target in i:
                return True
        return False

# 2 # O(n + log n) :

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for i in matrix:
            if i[-1] >= target:
                return self.binarySearch(i, target)
    
    def binarySearch(self, nums, k):
        left = 0 
        right = len(nums) - 1
        while left <= right:
            if nums[left] == k or nums[right] == k:
                return True
            else:            
                mid = (left + right) // 2
                if nums[mid] == k:
                    return True
                elif nums[mid] > k:
                    right = mid - 1
                else:
                    left = mid + 1
        return False

# 3 # o(log n + n) 

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        left = 0 
        right = len(matrix) - 1
        while left <= right:
            if matrix[left][-1] == target or matrix[left][-1] == target:
                return True
            else:            
                mid = (left + right) // 2
                if matrix[mid][-1] == target:
                    return True
                elif matrix[mid][-1] > target:
                    if target in matrix[mid]:
                        return True
                    else:
                        right = mid - 1
                else:
                    left = mid + 1
        return False        

# 4 # o(2 * log n)

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        left = 0 
        right = len(matrix) - 1
        while left <= right:
            if matrix[left][-1] == target or matrix[left][-1] == target:
                return True
            else:            
                mid = (left + right) // 2
                if matrix[mid][-1] == target:
                    return True
                elif matrix[mid][-1] > target:
                    if self.binarySearch(matrix[mid], target):
                        return True
                    else:
                        right = mid - 1
                else:
                    left = mid + 1
        return False        
            
    def binarySearch(self, nums, k):
        left = 0 
        right = len(nums) - 1
        while left <= right:
            if nums[left] == k or nums[right] == k:
                return True
            else:            
                mid = (left + right) // 2
                if nums[mid] == k:
                    return True
                elif nums[mid] > k:
                    right = mid - 1
                else:
                    left = mid + 1
        return False
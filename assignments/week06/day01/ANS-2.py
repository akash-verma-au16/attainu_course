# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

# This solution is the one asked in leetcode using Binary Search 
# The below given solution is with linear search that Shubham asked and that one works on leetcode 
# Both can be checked on leetcode

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        result = [0, len(nums) - 1]
       
        if len(nums) == 1:
            if nums[0] == target:
                return [0,0]
            else:
                return [-1,-1]
        elif len(nums) == 0:
            return [-1,-1]
        
        mid = 1
        while mid > 0:
            mid = (result[0] + result[1]) // 2
            if result[0] + 1 == result[1]:
                if nums[result[0]] == target:
                    if nums[result[1]] == target:
                        return result
                    else:
                        return [result[0],result[0]]
                elif nums[result[1]] == target:
                    return [result[1],result[1]]
                else:
                    return [-1,-1]
                
            elif nums[mid] == target:
                if nums[result[0]] == target and nums[result[1]] == target:
                    return result
                if nums[result[1]] != target:
                    result[1] -= 1
                if nums[result[0]] != target:
                    result[0] += 1
                
            elif nums[mid] > target:
                result[1] = mid
            else:
                result[0] = mid
        
        return [-1,-1]


# I am commenting out the code to do this with linear search with time complexity O(n)

"""

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lowerbound = -1
        upperbound = -1
        for i in range(len(nums)):
            if nums[i] == target:
                lowerbound = i
                break

        for i in range(len(nums) -1, -1, -1):
            if nums[i] == target:
                upperbound = i
                break
        
        return [lowerbound, upperbound]

"""
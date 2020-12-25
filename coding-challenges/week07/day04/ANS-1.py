# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/find-the-duplicate-number/

"""
Approach - 1 
"""

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        dict = {}
        for i in nums:
            if i in dict:
                dict[i] += 1
            else:
                dict[i] = 1
        for key, value in dict.items():
            if value > 1:
                return key   

# Time Complexity - O(n)
# Space Complexity - O(n)


"""
Approach - 2
"""
# This is the second approach where we are finding both missing and duplicate element 
# in O(1) space complexity and O(n) time complexity
# Not to be pasted in leetcode as the problem asks a different method there

# Run this in VS code 
"""

def findMissingDuplicate(nums):
    n = len(nums)
    natural_sum = (n * (n + 1)) // 2
    array_sum = sum(nums)
    
    m_d_sub =  natural_sum - array_sum
    
    sum_square = 0
    for i in nums:
        sum_square += i * i
    
    sum_square_natural = 0
    for i in range(1, len(nums) + 1):
        sum_square_natural += i * i
    
    m_d_add = (sum_square_natural - sum_square) // m_d_sub
    
    missing_element = (m_d_sub + m_d_add) // 2
    
    duplicate_element = m_d_add - missing_element
    
    return [missing_element, duplicate_element]

if __name__ == '__main__':
    nums = [1,2,2,3,4]
    print("Missing and Duplicate are : ", findMissingDuplicate(nums))

"""


# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/intersection-of-two-arrays-ii/

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dict = {}
        result = []

        for i in nums1:
            if i in dict:
                dict[i] += 1
            else:
                dict[i] = 1

        for j in nums2:
            if j in dict and  dict[j] > 0:
                result.append(j)
                dict[j] -= 1

        return result
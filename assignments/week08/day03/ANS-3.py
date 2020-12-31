# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/trapping-rain-water/

class Solution:
    def trap(self, height):
        areas = 0
        max_left = max_right = 0
        left = 0
        right = len(height) - 1
        
        while left < right:
            if height[left] < height[right]:
                if height[left] > max_left:
                    max_left = height[left]
                else:
                    areas += max_left - height[left]
                left += 1
            else:
                if height[right] > max_right:
                    max_right = height[right]
                else:
                    areas += max_right - height[right]
                right -= 1
                
        return areas
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/3sum/

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) <= 2:
            return []
        
        nums.sort()
        res = []
        for i in range(len(nums) - 2):
            if i >= 1 and nums[i] == nums[i - 1]:
                continue
            else:
                j = i + 1
                k = len(nums) - 1
                target = -nums[i]
                flag = 1
                while j < k:
                    if nums[j] + nums[k] > target:
                        k -= 1
                        flag = 1
                    elif nums[j] + nums[k] < target:
                        j += 1
                        flag = 1
                    else:
                        if flag == 1:
                            res.append([nums[i], nums[j], nums[k]])
                            flag = 0
                        else:
                            pass
                        k -= 1
        
        return res
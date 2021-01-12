# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

class Solution:
    def numberOfSteps (self, num: int) -> int:
        counter = 0
        def recursive(num):
            nonlocal counter
            if num < 1:
                return
            elif num % 2 == 0:
                counter += 1
                return recursive(num // 2)
            else:
                counter += 1
                return recursive(num - 1)
        
        recursive(num)
        return counter
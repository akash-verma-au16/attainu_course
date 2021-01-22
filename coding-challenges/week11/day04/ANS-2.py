# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/add-binary/

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        integer_sum = int(a, 2)+int(b, 2)
        binary_sum = bin(integer_sum)
        return binary_sum[2:]
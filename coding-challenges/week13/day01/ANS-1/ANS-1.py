# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/richest-customer-wealth/

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        customers = []
        for i in accounts:
            customers.append(sum(i))
        return max(customers)  
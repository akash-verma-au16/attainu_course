# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/coin-change/

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1 for i in range(amount + 1)]
        print(dp)
        dp[0] = 0
        
        for i in range(1, amount + 1):
            for c in coins:
                if c > i:
                    continue
                else:
                    dp[i] = min(dp[i], dp[i - c] + 1)
        
        if dp[amount] != amount + 1:
            return dp[amount]  
        else:
            return -1
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0
        
        buy_price = prices[0]
        max_profit = 0
        for i in range(1, len(prices)):
            if prices[i] < buy_price:
                buy_price = prices[i]
            else:
                max_profit = max(prices[i] - buy_price, max_profit)
                
        return max_profit
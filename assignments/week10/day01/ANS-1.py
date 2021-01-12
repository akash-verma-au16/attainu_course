# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/range-sum-of-bst/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        net_sum = 0
        def findSum(root):
            nonlocal net_sum
            
            if root is None:
                return 0
            
            if low <= root.val <= high:
                net_sum += root.val
            
            if root.left is not None:
                findSum(root.left)
            
            if root.right is not None: 
                findSum(root.right)
        
        findSum(root)
        return net_sum
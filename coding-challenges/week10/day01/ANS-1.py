# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/kth-smallest-element-in-a-bst/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        counter = 0
        def recursiveFunction(root, k):
            nonlocal counter
            
            if root is None:
                return
            
            a = recursiveFunction(root.left, k)
            
            counter += 1
            
            if counter == k:
                return root.val
            
            b = recursiveFunction(root.right, k)
            
            if b:
                return b  
            else:
                return a
        
        return recursiveFunction(root, k)
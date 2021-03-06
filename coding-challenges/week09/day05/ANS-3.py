# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/invert-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root is None:
            return

        root.left , root.right = root.right , root.left

        self.invertTree(root.left)
        self.invertTree(root.right)
        
        return root

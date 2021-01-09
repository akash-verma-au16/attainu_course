# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/maximum-depth-of-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root is None :
            return 0

        if root.left is None and root.right is None:
            return 1

        left_node = self.maxDepth(root.left)
        right_node = self.maxDepth(root.right)

        return max(left_node, right_node) + 1

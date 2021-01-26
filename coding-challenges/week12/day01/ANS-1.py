# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/diameter-of-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        if not root:
            return 0
        
        def height(node):
            if not node:
                return 0
            else:
                return max(height(node.left), height(node.right))+1
        
        left_height = height(root.left)
        right_height = height(root.right)
        
        left_diameter = self.diameterOfBinaryTree(root.left)
        right_diameter = self.diameterOfBinaryTree(root.right)
        
        return max(left_height + right_height, max(left_diameter, right_diameter))
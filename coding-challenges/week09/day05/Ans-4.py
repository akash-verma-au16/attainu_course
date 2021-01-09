# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/count-complete-tree-nodes/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: TreeNode) -> int:
        if root is None: 
            return 0

        height_left, height_right, left_node, right_node = 0, 0, root, root
        
        while left_node is not None:
            height_left += 1
            left_node = left_node.left
        
        while right_node is not None:
            height_right += 1
            right_node = right_node.right
        
        if height_right == height_left:
            return (1 << height_right) - 1
        
        else:
            return 1 + self.countNodes(root.left) + self.countNodes(root.right)
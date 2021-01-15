# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/merge-two-binary-trees/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, t1: TreeNode, t2: TreeNode) -> TreeNode:
        result_node = TreeNode()
        if t1 is None: 
            return t2
        if t2 is None: 
            return t1

        result_node.val = t1.val + t2.val

        result_node.left = self.mergeTrees(t1.left, t2.left)
        result_node.right = self.mergeTrees(t1.right, t2.right)
        
        return result_node
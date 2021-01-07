# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/binary-tree-preorder-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        
        current = root
        stack = []
        result = []
        
        while current or stack:
            while current: 
                result.append(current.val)
                stack.append(current)
                current = current.left
            
            temp = stack.pop()
            current = temp.right
            
        return result
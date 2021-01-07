# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/binary-tree-inorder-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:     
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        
        stack = []
        result = []
        current = root 
        
        while current or stack:
            while current:
                stack.append(current)
                current = current.left
                
            current = stack.pop()
            result.append(current.val)
            current = current.right
        
        return result
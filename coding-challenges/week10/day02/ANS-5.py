# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/validate-binary-search-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        output = []
        self._in_order(root, output)
        
        for i in range(1, len(output)):
            if output[i - 1] >= output[i]:
                return False
        return True
    
    def _in_order(self, root : TreeNode, output: list) -> list:
        if root is None: 
            return
        
        self._in_order(root.left, output)
        output.append(root.val)
        self._in_order(root.right, output) 

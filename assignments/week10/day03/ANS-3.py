# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/increasing-order-search-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.final = []
        
    def inOrder(self,root):
        if not root:
            return
        
        self.inOrder(root.left)
        self.final.append(root.val)
        self.inOrder(root.right)
        
    def increasingBST(self, root: TreeNode) -> TreeNode:
        self.inOrder(root)
        new_node_final = TreeNode(self.final[0])
        temp_node = new_node_final
        
        for i in range(1,len(self.final)):
            temp_node.right = TreeNode(self.final[i])
            temp_node = temp_node.right
            
        return new_node_final
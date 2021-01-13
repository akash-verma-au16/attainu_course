# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/balanced-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def solve(root,isBal=True):
            if root is None or not isBal:
                return 0, isBal

            l_height, isBal = solve(root.left, isBal)
            r_height, isBal = solve(root.right, isBal)

            if abs(l_height - r_height) > 1:
                isBal = False

            return max(l_height, r_height) + 1, isBal

        x, y = (solve(root))
        return y
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/maximum-width-of-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        queue = deque([(root,1)])
        width = 0
        while queue:
            _, left = queue[0]
            _, right = queue[-1]
            width = max(width, right - left + 1)
            next_level = deque()

            while queue:
                node, index= queue.popleft()

                if node.left :
                    next_level.append((node.left, 2 * index))

                if node.right:
                    next_level.append((node.right, 2 * index + 1))
            queue = next_level 

        return width
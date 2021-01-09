# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/binary-tree-level-order-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        queue = []
        final = []

        if root is not None:
            queue.append(root)

        while len(queue) != 0:
            curr_length = len(queue)
            curr_list = []

            for _ in range(curr_length):
                node = queue.pop(0)
                curr_list.append(node.val)

                if node.left is not None:
                    queue.append(node.left)

                if node.right is not None:
                    queue.append(node.right)

            final.append(curr_list)

        return final

# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/linked-list-cycle/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        stack = []
        while head is not None:
            stack.append(head)
            head = head.next
            if head in stack:
                return True
        
        return False
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/middle-of-the-linked-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        length = 0
        scroll = head
        while scroll is not None:
            length += 1
            scroll = scroll.next
        
        length = length // 2
        for i in range(length):
            head = head.next
        
        return head     
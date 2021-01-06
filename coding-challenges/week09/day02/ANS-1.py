# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/reverse-linked-list/


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head is not None:
            current = head.next
            head.next = None
            next_node = None
            while current is not None:
                    next_node = current.next
                    current.next = head
                    head = current 
                    current = next_node
        return head
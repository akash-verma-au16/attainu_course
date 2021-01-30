# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/remove-duplicates-from-sorted-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head is None:
            return
        
        scroll = head
        while scroll.next is not None:
            if scroll.val == scroll.next.val:
                scroll.next = scroll.next.next
            else:
                scroll = scroll.next
        
        return head
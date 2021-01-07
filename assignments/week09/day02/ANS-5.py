# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/palindrome-linked-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        element_list = []
        while head is not None:
            element_list.append(head.val)
            head = head.next
            
        return element_list == element_list[::-1]
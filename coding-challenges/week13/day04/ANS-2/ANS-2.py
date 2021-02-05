# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/reverse-nodes-in-k-group/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseSubList(self, curr, k):
        prev = None
        while k > 0:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            k -= 1
            
        return prev
            
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        end = head
        temp = ListNode(0)
        result = temp
        length = 1
        while end is not None:
            end = end.next
            if length != k:
                length += 1
            else:
                temp.next = self.reverseSubList(head, k)
                temp = head
                head = end
                length = 1
                
        temp.next = head
        
        return result.next
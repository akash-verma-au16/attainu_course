# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/merge-two-sorted-lists/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode: 
        if l1 is not None and l2 is not None:
            l3 = ListNode()
            head_l3 = l3
            while l1 is not None and l2 is not None:
                if l1.val < l2.val:
                    l3.val = l1.val
                    l1 = l1.next
                else:
                    l3.val = l2.val
                    l2 = l2.next 
                new_node = ListNode()
                l3.next = new_node
                l3 = new_node  

            while l1 is not None:
                l3.val = l1.val
                l1 = l1.next
                if l1 is None:
                    break

                new_node = ListNode()
                l3.next = new_node
                l3 = new_node

            while l2 is not None:
                l3.val = l2.val
                l2 = l2.next
                if l2 is None:
                    break

                new_node = ListNode()
                l3.next = new_node
                l3 = new_node  
            
            return head_l3
        elif l1 is None and l2 is not None:
            return l2
        elif l2 is None and l1 is not None:
            return l1
        else:
            return


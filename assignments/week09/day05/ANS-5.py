# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/odd-even-linked-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        if head is None or head.next is None or head.next.next is None:
            return head
        
        scroll = head
        count = 1
        while scroll.next.next is not None:
            scroll = scroll.next
            count += 1
        
        if count % 2 == 0:
            last = scroll.next
            stop = scroll.next
        else:
            last = scroll
            stop = scroll
            final_node = scroll.next.val
        
        scroll = head
        while scroll is not None:
            if scroll == stop:
                break
            
            temp = scroll.next
            scroll.next = scroll.next.next
            temp.next = None
            last.next = temp
            last = last.next
            scroll = scroll.next
        
        if count % 2 == 0:
            return head
        else:
            new_node = ListNode()
            new_node.val = final_node
            last.next = new_node
            return head
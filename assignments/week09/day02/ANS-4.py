# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/add-two-numbers/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        no_1 = ''
        no_2 = ''
        while l1 is not None:
            no_1 = str(l1.val) + no_1
            l1 = l1.next
        while l2 is not None:
            no_2 = str(l2.val) + no_2
            l2 = l2.next
            
        no = int(no_1) + int(no_2)
        print(no_1,no_2,no)
        
        l3 = ListNode()
        head = l3
        while no > 0:
            print(no)
            l3.val = no % 10
            no //= 10
            if no <= 0:
                break
            new_node = ListNode()
            l3.next = new_node
            l3 = new_node
        
        return head
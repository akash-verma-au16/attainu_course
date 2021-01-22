# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/intersection-of-two-linked-lists/

# Time complexity = O(n) and Space complexity = O(1) :-->: Hence, long code

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if not headA or not headB:
            return None
        
        h1 = headA
        h2 = headB
        lenA = 0
        lenB = 0
        while h1.next is not None:
            lenA += 1
            h1 = h1.next
        
        while h2.next is not None:
            lenB += 1
            h2 = h2.next
        
        if h1 != h2:
            return None
        
        h1 = headA
        h2 = headB
        if lenA > lenB:
            diff = lenA - lenB
            while diff > 0 and h1 is not None:
                h1 = h1.next
                diff -= 1
                
        else:
            diff = lenB - lenA
            while diff > 0 and h2 is not None:
                h2 = h2.next
                diff -= 1
        
        while h1 is not None and h2 is not None:
            if h1 == h2:
                return h1
            h1 = h1.next
            h2 = h2.next
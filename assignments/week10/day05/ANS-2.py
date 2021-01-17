# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/merge-k-sorted-lists/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        min_heap = []
        for i in lists: 
            root = i 
            while root:
                heapq.heappush(min_heap, root.val)
                root = root.next 
        
        head = current = ListNode(None)
        
        while min_heap:
            current.next = ListNode(heapq.heappop(min_heap))
            current = current.next
            
        return head.next
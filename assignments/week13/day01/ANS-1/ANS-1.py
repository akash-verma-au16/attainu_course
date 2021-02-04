# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/lru-cache/

class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None
        
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.hashmap = dict()
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        
    def get(self, key: int) -> int:
        if key not in self.hashmap:
            return -1
        else:
            node = self.hashmap[key]
            self.put(key, node.value)
            return node.value
        
    def put(self, key: int, value: int) -> None:
        if key in self.hashmap:
            node = self.hashmap[key]
            self.removeNodeFromList(node)
            self.hashmap.pop(node.key)
               
        if len(self.hashmap) == self.capacity:
            node = self.tail.prev
            self.removeNodeFromList(node)
            self.hashmap.pop(node.key)
        
        node = Node(key, value)
        self.hashmap[key] = node
        self.insertAtHead(node)
        
    def insertAtHead(self, node):
        node.next = self.head.next
        node.prev = self.head
        node.next.prev = node
        self.head.next = node

    def removeNodeFromList(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
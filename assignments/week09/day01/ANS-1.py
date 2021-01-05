class Node :
    def __init__(self, data):
        self.data = data
        self.next = None

head = None

def delFromFront():
    global head
    head = head.next

def delFromEnd():
    global head
    current = head
    prev = None
    while current.next is not None:
        prev = current
        current = current.next
    prev.next = None

def delFromRandom(pos):
    global head
    current = head
    count = 1
    prev = None
    if pos < 1:
        return
    if pos == 1:
        head = head.next
    while count is not pos:
        prev = current
        current = current.next
        count += 1
    prev.next = current.next


def addAtBeginning(x):
    global head
    if head is None:
        head = Node(x)
        return
    new_node = Node(x)
    new_node.next = head
    head = new_node

def addAtEnd(x):
    global head
    current = head
    while current.next is not None:
        current = current.next
    current.next = Node(x)

def addAtRandom(x,pos):
    if pos <= 0:
        return

    global head
    count = 1
    current = head
    while count != pos:
        current = current.next
        count += 1
    next_node = current.next
    new_node = Node(x)

    current.next = new_node
    new_node.next = next_node

    
def printList():
    global head
    current = head
    while current != None:
        print(current.data)
        current = current.next

def search(x):
    global head
    current = head
    while current.next is not None:
        if current.data is x:
            return True
        current = current.next
    return False

def length():
    global head
    current = head
    count = 1
    while current.next is not None:
        current = current.next
        count += 1
    return count

if __name__ == "__main__":
    
    addAtBeginning(11)
    addAtEnd(40)
    addAtRandom(2,1)
    addAtBeginning(5)
    addAtRandom(5,3)
    addAtEnd(64)

    print()
    print("Linked list is : ")
    printList()
    print()
    
    print("Now searching for element in the LinkList:")
    print(search(40))
    print(search(64))
    print()
    
    print("Length of the Linked list is  : ", length())
    print()

    delFromEnd()
    print("Linked list after deletion from end is : ")
    printList()
    print()

    delFromRandom(2)
    print("Linked list after deletion from random is : ")
    printList()
    print()
    
    delFromFront()
    print("Linked list after deletion from front is : ")
    printList()
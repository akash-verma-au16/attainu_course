queue = []

def enqueue(x):
    global queue
    queue.append(x)

def dequeue(x):
    global queue
    if is_empty():
        return
    return queue.pop(0)

def is_empty():
    global queue
    return len(queue)==0

if __name__ == "__main__":
    enqueue(6)
    enqueue(99)
    print(dequeue(6))
    print(dequeue(99))
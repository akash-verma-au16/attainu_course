# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/min-stack/

class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []

    def push(self, x: int) -> None:
        self.stack.append(x)

    def pop(self) -> None:
        if len(self.stack):
            self.stack.pop()
        else:
            return
        
    def top(self) -> int:
        if len(self.stack):
            return self.stack[-1]
        else:
            return None

    def getMin(self) -> int:
        if len(self.stack):
            return min(self.stack)
        else:
            return None
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
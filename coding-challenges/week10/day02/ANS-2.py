# I couldn't pass all the testcases in geeksforgeeks so i just wrote in VS code.

class TreeNode(object):
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

d = {}

def traverse(root, axis):
    global d

    if root is None:
        return

    if axis not in d.keys():
        d[axis] = root.val

    traverse(root.left, axis - 1)
    traverse(root.right, axis + 1)

if __name__ == "__main__":
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    root.right.left = TreeNode(6)
    root.right.right = TreeNode(7)

    traverse(root,0)

    for i in sorted(d.keys()):
       print(d[i] , end =" ")
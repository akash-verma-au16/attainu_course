# Run the solution in VS code 

def uniquePaths(rows, columns , i, j):
    if i > rows:
        return 0
    if j > columns:
        return 0
    if i == rows and j == columns:
        return 1
    result = uniquePaths(rows, columns, i + 1, j) + uniquePaths(rows, columns, i, j + 1)
    return result

print()
rows = int(input("Enter the value of rows : "))
print()
columns = int(input("Enter the value of columns : "))
result = uniquePaths(rows - 1, columns - 1, 0, 0)
print()
print("Number of paths available for the robot to reach the destination are : ", result)
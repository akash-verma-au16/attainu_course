# Run the solution in VS code 

def floorTiling(columns):
    if columns < 0:
        return 0
    if columns == 0:
        return 1
    result = floorTiling(columns - 1) + floorTiling(columns - 2)
    return result

print()
columns = int(input("Enter the number of columns : "))
print()
print("Number of tiles that can be arranged in 2 rows" , columns , "columns are : ", floorTiling(columns))

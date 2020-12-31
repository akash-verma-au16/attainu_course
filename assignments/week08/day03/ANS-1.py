# My code works for all the given testcases but the time complexity of mine is O(n^2) and 
# It shows time limit exceeded when I submit in geeksforgeeks otherwise the code is perfect

arr = [1,3,2,4]
n = len(arr) 

next_greater_element = []
for i in range(n):
    for j in range(i + 1, n):
        if arr[j] > arr[i]:
            next_greater_element.append(arr[j])
            break
    if len(next_greater_element) != i + 1:
        next_greater_element.append(-1)
        
print("The final array is : ", next_greater_element)
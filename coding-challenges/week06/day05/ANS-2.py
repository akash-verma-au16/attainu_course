# Selection Sort

array = [64, 25, 12, 22, 11] 
  
for i in range(len(array)):     
    min_idx = i 
    for j in range(i + 1, len(array)): 
        if array[min_idx] > array[j]: 
            min_idx = j     
    array[i], array[min_idx] = array[min_idx], array[i] 
 
print(array) 

# Time complexity : O(n**2)
# Space complexity : O(1)
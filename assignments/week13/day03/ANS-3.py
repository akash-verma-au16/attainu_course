# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/pascals-triangle/

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        new_list = []
        for i in range(numRows):
            if i == 0:
                new_list.append([1])
                
            elif i == 1:
                new_list.append([1, 1])
                
            else:
                temp_list = []
                c = 0
                while c < 3:
                    if c == 0:
                        temp_list.append(1)
                    elif c == 2:
                        temp_list.append(1)
                    else:
                        temp_element = new_list[i - 1]
                        for j in range(1, len(temp_element)):
                            sum_adjacent = 0
                            sum_adjacent = temp_element[j] + temp_element[j - 1]
                            temp_list.append(sum_adjacent)
                    c += 1
                    
                new_list.append(temp_list)
                
        return new_list
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/sort-array-by-increasing-frequency/

class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        temp = dict()
        for i in nums:            
            if i in temp:
                temp[i] += 1
            else:
                temp[i] = 1

        temp = sorted(temp.items(), key = lambda x: x[1])  
        length = len(temp)
        for i in range (length):                  
            for j in range (i + 1, length):
                if temp[i][1] == temp[j][1] and temp[i][0] < temp[j][0]:
                    temp[i], temp[j] = temp[j], temp[i]

        result = list()
        for i in range(length):          
            for j in range(temp[i][1]):
                    result.append(temp[i][0])
                    
        return result
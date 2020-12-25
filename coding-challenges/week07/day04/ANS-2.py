# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/count-and-say/

class Solution:
    def countAndSay(self, n: int) -> str:
        if n==1:
            return '1'
        
        string = '1'
        for i in range(1,n):
            new_string = ''
            count = 1
            for j in range(len(string)):
                if j == len(string) - 1:
                    new_string = new_string + str(count) + string[j]
                    break
                elif string[j] == string[j + 1]:
                    count += 1
                else:
                    new_string = new_string + str(count) + string[j]
                    count = 1
            
            string = new_string
        
        return new_string
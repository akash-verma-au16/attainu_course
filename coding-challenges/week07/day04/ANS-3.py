# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/longest-common-prefix/

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:  
        n = len(strs)
        if n == 0:
            return ""
        elif n == 1:
            return strs[0]
        
        common = []
        common = list(strs[0])
        for i in range(1, len(strs)):
            element = list(strs[i])
            new_common = []
            for j in range(len(common)):
                if j < len(element) and element[j] == common[j]:
                    new_common.append(common[j]) 
                else:
                    break  
            common = new_common.copy()

        return ''.join(common)
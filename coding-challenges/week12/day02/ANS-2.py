# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/combination-sum/

class Solution:
    def generateSolutions(self, idx, temp):
        if sum(temp) > self.target:
            return
        
        if sum(temp) == self.target:
            ans = sorted(temp[:])
            ans = ','.join(map(str, ans))
            self.res.add(ans)
            return
        
        for i in range(len(self.candidates)):
            temp.append(self.candidates[i])
            self.generateSolutions(idx, temp)
            temp.pop()
            
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        self.candidates = candidates
        self.target = target
        
        self.res = set()
        
        self.generateSolutions(0, [])     
        
        ans = list()
        for i in self.res:
            ans.append(map(int, i.split(',')))
        
        return ans
# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/merge-intervals/

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        
        merge = len(intervals)
        for i in range(merge - 1):
            for j in range(i + 1, merge):
                 if intervals[i][0] >= intervals[j][0]:
                        intervals.insert(i, intervals[j])
                        intervals.pop(j + 1)
        
        i = 0
        while i < merge - 1:
            j = i + 1 
            if intervals[i][0] < intervals[j][0] and intervals[i][1] < intervals[j][0]:
                i += 1
            else:       
                while j < merge: 
                    if intervals[i][0] >= intervals[j][0]:
                        intervals[i][0] = intervals[j][0]
                        if intervals[i][1] < intervals[j][1]:
                            intervals[i][1] = intervals[j][1]
                        intervals.pop(j)
                        merge -= 1
                    elif intervals[i][1] >= intervals[j][0]:
                        if intervals[i][1] < intervals[j][1]:
                            intervals[i][1] = intervals[j][1]
                        intervals.pop(j)
                        merge -= 1
                    j += 1
        return intervals
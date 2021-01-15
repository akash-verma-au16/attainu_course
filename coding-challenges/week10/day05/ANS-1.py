# Paste the given code in geeksforgeeks for getting testcases, as it won't run here

# link - https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1

#User function Template for python3
def minCost(a,n) :
    '''
    use heapq module , imported already by driver code.
    :param a: given array
    :param n: size of array
    :return: Integer
    '''
    # code here
    if n == 0:
        return 
    
    elif n == 1:
        return 0
    
    elif n == 2:
        return a[0] + a[1]
    
    else:    
        heapq.heapify(a)
        cost = 0
        while len(a) > 1:
            sum = heapq.heappop(a) + heapq.heappop(a)
            heapq.heappush(a, sum)
            cost += sum
            
        return cost



#{ 
#  Driver Code Starts
#Initial Template for Python 3
import atexit
import io
import sys
import heapq
from collections import  defaultdict
# Contributed by : Nagendra Jha

_INPUT_LINES = sys.stdin.read().splitlines()
input = iter(_INPUT_LINES).__next__
_OUTPUT_BUFFER = io.StringIO()
sys.stdout = _OUTPUT_BUFFER

@atexit.register

def write():
    sys.__stdout__.write(_OUTPUT_BUFFER.getvalue())

if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases):
        n = int(input())
        a = list(map(int, input().strip().split()))
        print(minCost(a,n))
# } Driver Code Ends
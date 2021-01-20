# Paste the given code in leetcode for getting testcases, as it won't run here

# link - https://leetcode.com/problems/longest-increasing-subsequence/

#User function Template for python3

##Complete this function
def maxSubArraySum(a,size):
    ##Your code here
    cur_sum = a[0]
    max_sum = a[0]
    for i in range(1, len(a)):
        cur_sum = max(cur_sum + a[i], a[i])
        max_sum = max(cur_sum, max_sum)
    return max_sum


#{ 
#  Driver Code Starts
#Initial Template for Python 3

import math

 
def main():
        T=int(input())
        while(T>0):
            
            n=int(input())
            
            arr=[int(x) for x in input().strip().split()]
            
            print(maxSubArraySum(arr,n))
            
            T-=1


if __name__ == "__main__":
    main()
# } Driver Code Ends
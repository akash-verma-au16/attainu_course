# Paste the given code in geekforgeeks for getting testcases, as it won't run here

# link - https://practice.geeksforgeeks.org/problems/merge-sort/1

#User function Template for python3

def merge(arr, l, m, r): 
    # code here
    p1 = l
    p2 = m + 1
    temp = []

    while p1 <= m and p2 <= r:
        if arr[p1] < arr[p2]:
            temp.append(arr[p1])
            p1 += 1
        else:
            temp.append(arr[p2])
            p2 += 1
    
    while p1 <= m:
        temp.append(arr[p1])
        p1 += 1

    while p2 <= r:
        temp.append(arr[p2])
        p2 += 1

    i = 0
    while i < len(temp):
        arr[i + l] = temp[i]
        i += 1
        
#{ 
#  Driver Code Starts
#Initial Template for Python 3
"""
def mergeSort (arr, l, r):
    if l < r:
        m = l + (r - l)//2
        
        mergeSort (arr, l, m)
        mergeSort (arr, m+1, r)
        merge (arr, l, m, r)

if __name__ == "__main__":
    t=int(input())
    for i in range(t):
        n=int(input())
        arr=list(map(int,input().split()))
        mergeSort(arr, 0, n-1)
        for i in range(n):
            print(arr[i],end=" ")
        print()
"""
# } Driver Code Ends
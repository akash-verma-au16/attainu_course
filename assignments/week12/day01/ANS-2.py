# Paste the given code in hackerrank for getting testcases, as it won't run here

# link - https://www.hackerrank.com/challenges/insertionsort1

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the insertionSort1 function below.
def insertionSort1(n, arr):
    elem = arr[n - 1]
    i = n - 2

    while i >= 0 and elem < arr[i]:
        arr[i + 1] = arr[i]
        print(*arr)
        i -= 1

    arr[i + 1] = elem
    print(*arr)

if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    insertionSort1(n, arr)
    
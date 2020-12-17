count = 0

def naturalNumberSum(n):
    global count
    if n == 0:
        return count
    count += n
    naturalNumberSum(n - 1)
    return count

print()
n = int(input("Enter the 'n' to print sum for 'n' natural numbers : "))
print()
print("The sum of first", n, "natural numbers is :", naturalNumberSum(n))
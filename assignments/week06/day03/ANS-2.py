first_no = 1
second_no = 1
count = 1

def fibonacciNumber(n):
    global count
    global first_no
    global second_no
    if count == n:
        print(first_no, end=" ")
    elif count > n:
        return
    first_no, second_no = second_no, first_no + second_no
    count += 1
    fibonacciNumber(n)

print()
n = int(input("Enter the value of 'n' to print 'n th' fibonacci number :  "))
print()
print("The Fibonacci Series untill 'n' is : ", end="")
fibonacciNumber(n)
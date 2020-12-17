answer = 1

def pow(number, power):
    global answer
    if power == 0:
        return 1
    answer *= number 
    pow(number, power - 1)
    return answer

print()
number = int(input("Enter the base number : "))
print()
power = int(input("Enter the power to the number : ")) 
print()
print(" The result is : ", pow(number, power))
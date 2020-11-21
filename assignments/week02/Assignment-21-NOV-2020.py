count = "First_Time"

while True:
    
    if count == "First_Time":
        print("Enter the First Number : ", end="")
        firstNumber = float(input())
        print("")

        print("Enter the Second Number : ", end="")
        secondNumber = float(input())
        print("")

        print("Enter the operation that you want to perform (+,-,*,/) or press 'Q' to quit : ", end="")
        operator = input()
        print("")
        

    if count == "Repeating_Loop":
        print("")
        
        print("If you want to quit press 'Q', if you want to try again press any other key : ", end="")
        choice = input()
        print("")

        if choice == "q" or choice == "Q" : 
            break

        print("Enter the First Number : ", end="")
        firstNumber = float(input())
        print("")

        print("Enter the Second Number : ", end="")
        secondNumber = float(input())
        print("")

        print("Enter the operation that you want to perform (+,-,*,/) : ", end="")
        operator = input()
        print("")
    
    


    if operator == "+":
        print("You have selected Addition and the result is : ",firstNumber," + ",secondNumber," = ",firstNumber + secondNumber)
    elif operator == "-":
        print("You have selected Subtraction and the result is : ",firstNumber," - ",secondNumber," = ",firstNumber - secondNumber)
    elif operator == "*":
        print("You have selected Multiplication and the result is : ",firstNumber," * ",secondNumber," = ",firstNumber * secondNumber)
    elif operator == "/":
        print("You have selected Division and the result is : ",firstNumber," / ",secondNumber," = ",firstNumber / secondNumber)
    elif operator == "q" or operator == "Q":
        print("Thanks for using the calculator")
        break
    else:
        print("You have entered a wrong choice please give a correct operation.") 
    
    count = "Repeating_Loop"
           



from class_circle import Circle

if __name__ == "__main__":
    
    print()
    user_input = Circle(float(input("Enter the radius of the circle : ")))
    print()
    user_input.circumference()
    print()
    user_input.area()
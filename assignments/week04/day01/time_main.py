from class_time import Time   

if __name__ == "__main__":
    
    print()
    time_one = Time(int(input("Enter the hours for first object : ")), int(input("Enter the minutes for first object : ")))
    print()
    print("Time of first object => ", end="")
    time_one.displayTime()
    print()
    print("Time of first object in only minutes => ", end="")
    time_one.displayMinutes()

    print()
    time_two = Time(int(input("Enter the hours for second object : ")), int(input("Enter the minutes for second object : ")))
    print()
    print("Time of second object => ", end = "")
    time_two.displayTime()
    print()
    print("Time of first object in only minutes => ", end="")
    time_two.displayMinutes()

    print()
    print("The total time for both objects will be => ", end="")
    time_total = Time(0,0)
    time_total.addTime(time_one, time_two)


    


    
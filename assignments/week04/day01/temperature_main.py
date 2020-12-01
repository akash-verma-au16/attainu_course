from class_temperature import Temperature 

if __name__ == "__main__":
    print()
    choice = input("Enter 'C' for temperature in Celsius and 'F' for temperature in Fahrenheit : ")

    if choice == 'C' or choice == 'c':
        print()
        in_celsius = Temperature(float(input("Enter the temperature : ")))
        print()
        in_celsius.convertFahrenheit()

    elif choice == 'F' or choice == 'f':
        print()
        in_fahrenheit = Temperature(float(input("Enter the temperature : ")))
        print()
        in_fahrenheit.convertCelsius()

    else:
        print()
        print("Wrong choice")


def is_odd_string(string):
    if len(string) == 2:
        return "True"

    previous = string[1]
    sum = 1

    for i in range(2, len(string)):
        if string[i] > previous:
            sum += i
            previous = string[i]
            if sum % 2 == 0:
                return "False"

        elif string[i] == previous:
            return "False"

    return "True"


if __name__ == "__main__":
    string = list(input("Enter a string of characters : "))
    string.insert(0, None)

    print(is_odd_string(string))

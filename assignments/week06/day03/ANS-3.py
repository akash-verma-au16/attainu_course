count = 0

def string_length(string):
    global count
    if string == "":
        return 0
    count+=1
    string_length(string[:-1])
    return count

print()
string =input("Enter the string to calculate its length : ") 
print()
print(string_length(string))
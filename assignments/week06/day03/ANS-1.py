count = 0

def vowelPrinter(string):
    global count 
    vowels = ['a','e','i','o','u','A','E','I','O','U']

    if len(string) == 0:
        return count

    if string[-1] in vowels: 
        count += 1
        
    string = string[:-1]
    vowelPrinter(string)
    return count

print()
string = input("Enter a string : ")
print()
print("The vowels in this String are : ", vowelPrinter(string))
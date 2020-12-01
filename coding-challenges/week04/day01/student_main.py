from class_student import Student

if __name__ == "__main__":
    print()
    akash = Student(input("Enter the name of the student : "), input("Enter the roll number of the student : "))
    akash.setAge(input("Enter the age of the student : "))
    akash.setMarks(input("Enter the marks of the student : "))
    print()
    akash.display()